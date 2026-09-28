import connectDB from "../../../../lib/mongodb";
import Note from "../../../../models/Note";
import {getCurrentUser} from "../../../../lib/auth";

export async function PATCH(request,{params}) {
  try {
    await connectDB();
  const user= await getCurrentUser();
  if(!user){
    return Response.json({
      message: "Unauthorized"
    },{status:401})
  }
  const {id} = await params;
  const body= await request.json();

  if(typeof body.text !== "string" || body.text.trim() === "" || body.text.length > 500){
    return Response.json({message:"Invalid Text context"},{status:400})
  }
  const note= await Note.findOneAndUpdate(
    {
      _id: id,
      userId: user._id,
    }, { text:body.text }, {
      new:true
    }
  )

  if(!note){
    return Response.json({
      message:"No notes were found"
    },{status:404})
  }

  return Response.json({
    message: "Note updated successfully",
    note: {
      id: note._id,
      text: note.text,
    },
  },{status:200})
  } catch (error) {
    return Response.json(
    { message: "Note updated successfully" },
    { status:500 }
  )
  }
}


export async function DELETE(request,{params}) {
  try {
    await connectDB();
  const user=await getCurrentUser();
    if(!user){
      return Response.json(
        { message:"Unauthorized User" },
        { status: 401 })
    }

  const {id}= await params;

  const note= await Note.findOneAndDelete({
      _id:id,
      userId: user._id,
  })
  if (!note) {
  return Response.json(
    { message: "Note not found" },
    { status: 404 }
  )}

  return Response.json(
    { message: "Note Deleted successfully" },
    { status: 200 }
  )
  } catch (error) {
    return Response.json(
    { message: "Note Deletion Unsuccessfully" },
    { status: 500 }
  )
  }
}
