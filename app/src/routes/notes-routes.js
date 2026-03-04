import { Router } from "express";
import getAllNotes from "../controllers/notes-controller.js";

const router = Router();

router.get("/", getAllNotes);

export default router;
