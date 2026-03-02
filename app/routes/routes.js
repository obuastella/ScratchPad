import express, { Router } from "express";
import notesController from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/notes", notesController);

export default router;
