import Notes from "../model/notesSchema.js";
const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res
      .status(200)
      .json({ message: "Notes retrieved successfully", notes: notes });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("An error occured", error);
  }
};
export default getAllNotes;
