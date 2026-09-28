
import User from "../../../models/User";
import connectDB from "../../../lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    const users= await User.find();
    return Response.json(
      { success:true,
        users,
      },
      {status: 200}
    )
  } catch (error) {
    return Response.json(
      {success:false,message:"Error getting data",},
      {status:500}
    )
  }
}