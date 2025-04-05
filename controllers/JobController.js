import { nanoid } from "nanoid";
import Job from "../model/jobModel.js";
import { NotFoundError } from "../errors/customError.js";

export async function GetAllJobs(req, res) {
  const jobs = await Job.find({});
  res.status(200).json({ jobs, count: jobs.length });
}

export async function CreateJob(req, res) {
  const { company, position } = req.body;

  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }

  const job = await Job.create({ company, position });
  res.status(200).json({ job });
}

export async function GetSingleJob(req, res) {
  const { id } = req.params;

  const singleJob = await Job.findById(id);

  if (!singleJob) throw new NotFoundError("No job with" + id);

  res.status(200).json({ singleJob });
}

export async function UpdateJob(req, res) {
  const { company, position } = req.body;

  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }

  const { id } = req.params;

  const UpdateSingleJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!UpdateSingleJob) {
    res.status(400).json({ message: "invalid Id" });
    return;
  }

  res.status(200).json({ UpdateSingleJob });
}

export async function DeleteJob(req, res) {
  const { id } = req.params;

  const job = await Job.findByIdAndDelete(id);

  if (!job) {
    res.status(400).json({ message: `No job with this ${id}` });
    return;
  }

  res.status(200).json({ message: "deleted" });
}
