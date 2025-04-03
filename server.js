import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express, { raw } from "express";

const app = express();
import morgan from "morgan";
import router from "./Routes/JobRoutes.js";
import ConnectDB from "./DB/connectDB.js";

if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

app.use("/api/v1/jobs", router);
// app.get("/api/v1/jobs");
// app.post("/api/v1/jobs");

// app.get("/api/v1/jobs/:id");

// app.patch("/api/v1/jobs/:id");

// app.delete("/api/v1/jobs/:id");

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

const PORT = process.env.PORT || 5100;

const start = async () => {
  await ConnectDB(process.env.MONGODB_URL);
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
