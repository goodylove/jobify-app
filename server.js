import * as dotenv from "dotenv";
dotenv.config();
import { nanoid } from "nanoid";

import express, { raw } from "express";

const PORT = process.env.PORT || 5100;
const app = express();
import morgan from "morgan";

let jobs = [
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

app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;

  const singleJob = jobs?.find((job) => job.id === id);

  if (!singleJob) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }

  res.status(200).json({ singleJob });
});

app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }

  const { id } = req.params;

  const job = jobs?.find((job) => job.id === id);

  if (!job) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }
  job.company = company;
  job.position = position;
  job.id = nanoid();

  res.status(200).json({ message: "Jobs modifield " });
});

app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;

  const job = jobs?.find((job) => job.id === id);

  if (!job) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }

  const newJob = jobs.filter((job) => job.id !== id);
  jobs = newJob;

  res.status(200).json({ message: "deleted " });
});

const start = () => {
  app.listen(PORT, () => console.log("Listening to port " + PORT));
};

start();
