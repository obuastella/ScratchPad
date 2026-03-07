import mongoose from "mongoose";
import Notes from "../model/notes-model.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find(); // find will always return an array
    if (!notes.length === 0) {
      res.status(404).json({ message: "Notes does not exist" });
      console.log("Notes not found...");
    }
    console.log("All notes: ", notes);
    res.status(200).json({ message: "All notes", notes: notes });
  } catch (error) {
    console.log("An error occured getting notes", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(404).json({ message: "Title and body is required..." });
    }
    const note = await Notes.create({
      title,
      description,
    });
    res.status(201).json({ message: "Note added successfully!", note: note });
    return;
  } catch (error) {
    console.log("An error occured adding note", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateNote = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      res.status(404).json({ message: "Invalid note id" });
    }
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(201).json({ message: "Note updated succesfully", note: note });
  } catch (error) {
    if (error === "CastError") {
      res.status(404).json({ message: "Invalid id format" });
    }
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json("Invalid note id");
    }
    const note = await Notes.findById(req.params.id);
    res
      .status(200)
      .json({ message: "Note retrieved successfully.", note: note });
  } catch (error) {
    console.log("An errpr occurred", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

const deleteNoteById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: "Invalid id" });
    }
    const note = await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted", note: note });
  } catch (error) {
    console.log("An error occurred deleting note: ", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export { getAllNotes, createNote, updateNote, getNoteById, deleteNoteById };
