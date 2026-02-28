import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Listening on Port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("An error occured while starting the server....");
  }
};

startServer();
