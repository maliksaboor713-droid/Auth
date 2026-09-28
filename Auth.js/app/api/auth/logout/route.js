import connectDB from "@/lib/mongodb";
import Session from "@/models/Session";
import { cookies } from "next/headers";

export async function POST() {
  try {
    await connectDB();
    const cookieStore= await cookies();
    const sessionId= await cookieStore.get("sessionId")?.value;
    if (sessionId){
      await Session.deleteOne({sessionId})
    }
    cookieStore.delete("sessionId")

    return Response.json({
      success:true,
    message:"User loggedOut successfully",
  },
  {status:200}
  )} catch (error) {
    return Response.json(
      { message:"Unable to LogOut User" },
      { status:500 }
    )
  }
}
