import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
