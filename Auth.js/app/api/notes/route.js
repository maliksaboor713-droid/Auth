import connectDB from "../../../lib/mongodb";
import Note from "../../../models/Note";
import {getCurrentUser} from "../../../lib/auth";


export async function GET() {
  try {
    await connectDB();
  const user= await getCurrentUser()
    if(!user){
      return Response.json({
        message:"Unauthorized",
      },{status:401})
    }

  const note= await Note.findOne({
    userId: user._id,
  }).sort({createdAt: -1});

  return Response.json({
    success: true,
    note,
  },{status:201})
  } catch (error) {
    return Response.json({
    success: false,
    message:"Unable to get Note",
  },{status:404})
  }
}


export async function POST(request) {
  try {
    await connectDB();
  const user= await getCurrentUser();
  if(!user){
    return Response.json({
    message:"Unauthorized"
  },{status:401})
  }
  const body= await request.json();

  if (typeof body.text !== "string" || body.text.trim() === "" || body.text.length > 500){
    return Response.json({message:"invalid text context"},{status:400})
  } 
  const note= await Note.create({
    userId: user._id,
    text: body.text,
  })

  return Response.json({
    message:"Note created successfully",
    note : {
      id: note._id,
      text: note.text,
    },
  },{status:201})
  } catch (error) {
    return Response.json(
      { message:"Note creation Unsuccessfully" },
      { status:500 }
    )
  }
}
