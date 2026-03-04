import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const startServer = async () => {
  try {
    await connectDB();
    app.listen(() => {
      console.log(`Listening on Port: `, process.env.PORT);
    });
  } catch (error) {
    console.log("error starting server", error);
  }
};
startServer();
