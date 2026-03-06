import { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  getNoteById,
} from "../controllers/notes-controller.js";

const router = Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.get("/:id", getNoteById);

export default router;
