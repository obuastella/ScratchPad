import { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  getNoteById,
  deleteNoteById,
} from "../controllers/notes-controller.js";

const router = Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNoteById);

export default router;
