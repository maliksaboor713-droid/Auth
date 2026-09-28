import User from "../../../../models/User";
import connectDB from "../../../../lib/mongodb";
import Session from "../../../../models/Session";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    await connectDB();
    const {email,password}= await request.json();

    if (!email || !password){
      return Response.json(
        {message:"Required password or email"},
        {status:400})
    }

    const user= await User.findOne({email});
    if(!user){
      return Response.json(
        {message:"Invalid User"},
        {status:400})
    }

    const matchedPassword= await bcrypt.compare(password, user.password)
    if (!matchedPassword){
      return Response.json(
        {message:"Invalid password"},
        {status:400})
    }

      // Session
    const sessionId= crypto.randomBytes(32).toString("hex");
    const expiresAt= new Date( Date.now() + 7 *24 *60 *60 *1000 )
    await Session.create({
      sessionId,
      userId: user._id,
      expiresAt,
    })
  // Cookies
  const cookieStore = await cookies();
    cookieStore.set("sessionId", sessionId, {
      httpOnly: true,    // js in br =/ read cookies
      secure: process.env.NODE_ENV === "production",    //cookie should only be transmitted over HTTP
      sameSite: "lax",  // browser additional protection against certain cross-site request 
      path: "/",        //cookie is available across your application.
      expires: expiresAt,
    });

    return Response.json(
    { message:"User Logged-In successfully" ,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    },
    { status:201 }
    )
  } catch (error) {
    return Response.json(
    { message:"Unable to log-in User" },
    { status:500 })
  }
}