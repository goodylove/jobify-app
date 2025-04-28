import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express, { raw } from "express";
const app = express();

import morgan from "morgan";
import router from "./Routes/JobRoutes.js";
import ConnectDB from "./DB/connectDB.js";
import ErrorHandlerMiddleware from "./middleware/errorHandler.js";
import AuthRouter from "./Routes/auth.js";
import userRouter from "./Routes/userRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cookieParser());
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authMiddleware, router);
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/auth", AuthRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.use(ErrorHandlerMiddleware);

const PORT = process.env.PORT || 5100;

const start = async () => {
  await ConnectDB(process.env.MONGODB_URL);
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
