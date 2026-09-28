import User from "../../../../models/User";
import connectDB from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const {name,email,password} = await req.json();
  // All fields are required 
    if (!name || !email || !password){
      return Response.json(
        {message:"All filds are required"},
        {status:400}
    )}
  // Check : existingUser
    const existingUser= await User.findOne({email});
    if (existingUser){
      return Response.json(
        {message:"User already exists"},
        {status:400}
    )} 
  // secure password and create user
    const hashedPassword= await bcrypt.hash(password,10);
    const user= await User.create({
      name,email,
      password: hashedPassword,
    })

    return Response.json(
    { message:"User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    },
    {status:201}
  )
  } catch (error) {
    console.error(error);

    return Response.json(
      {message:"Something went wrong"},
      {status:500}
    )
  }
}