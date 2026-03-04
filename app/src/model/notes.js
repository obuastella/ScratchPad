import mongoose, { Schema } from "mongoose";

const notesSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Notes = mongoose.model("notes", notesSchema);

export default Notes;
