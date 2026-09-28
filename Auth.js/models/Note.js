import mongoose from "mongoose";

const noteSchema= new mongoose.Schema(
  {
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", required:true,
    },
    text:{
      type:String, required:true,
      trim:true,
    }
  },{timestamps:true}
)

const Note= mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;