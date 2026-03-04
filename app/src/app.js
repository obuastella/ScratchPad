import express from "express";
const app = express(); // creates express app

app.use(express.json());

export default app;
