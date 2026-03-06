import { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
} from "../controllers/notes-controller.js";

const router = Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.patch("/:id", updateNote);

export default router;
