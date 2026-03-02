import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    note: String,
  },
  { timestamps: true },
);

const Notes = mongoose.model("Notes", notesSchema);
export default Notes;
