import { nanoid } from "nanoid";

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

export async function GetAllJobs(req, res) {
  res.status(200).json({ jobs });
}

export async function CreateJob(req, res) {
  const { company, position } = req.body;

  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }
  const job = { id: nanoid(), company, position };
  jobs.push(job);
  res.status(200).json({ jobs });
}

export async function GetSingleJob(req, res) {
  const { id } = req.params;

  const singleJob = jobs?.find((job) => job.id === id);

  if (!singleJob) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }

  res.status(200).json({ singleJob });
}

export async function UpdateJob(req, res) {
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
}

export async function DeleteJob(req, res) {
  const { id } = req.params;

  const job = jobs?.find((job) => job.id === id);

  if (!job) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }

  const newJob = jobs.filter((job) => job.id !== id);
  jobs = newJob;

  res.status(200).json({ message: "deleted " });
}
