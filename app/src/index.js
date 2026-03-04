import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const startServer = async () => {
  try {
    app.listen(() => {
      console.log(`Listening on Port: `, process.env.PORT);
    });
  } catch (error) {
    console.log("error starting server", error);
  }
};
startServer();
