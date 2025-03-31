import * as dotenv from "dotenv";
dotenv.config();

import express from "express";

const PORT = process.env.PORT || 5100;
const app = express();
import morgan from "morgan";

if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

const start = () => {
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
