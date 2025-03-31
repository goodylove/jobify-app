import * as dotenv from "dotenv";
dotenv.config();
import { nanoid } from "nanoid";

import express from "express";

const PORT = process.env.PORT || 5100;
const app = express();
import morgan from "morgan";

const jobs = [
  {
    id: nanoid(),
    company: "Apple",
    position: "Fullstack",
  },
  {
    id: nanoid(),
    company: "Goggle",
    position: "Devops",
  },
  {
    id: nanoid(),
    company: "Meta",
    position: "Fullstack",
  },
];

if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("helo world");
});

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }
  const job = { id: nanoid(), company, position };
  jobs.push(job);
  res.status(200).json({ jobs });
});

const start = () => {
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
