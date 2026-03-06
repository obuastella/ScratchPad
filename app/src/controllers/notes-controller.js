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

export { getAllNotes, createNote };
