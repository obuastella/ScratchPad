import express from "express";
import notesRouter from "./routes/notes-routes.js";
const app = express(); // creates express app

app.use(express.json());

app.use("/api/v1/notes", notesRouter);

export default app;
