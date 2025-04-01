import { Router } from "express";
import {
  CreateJob,
  DeleteJob,
  GetAllJobs,
  GetSingleJob,
  UpdateJob,
} from "../controllers/JobController.js";

const router = Router();

router.route("/").get(GetAllJobs).post(CreateJob);
router.route("/:id").get(GetSingleJob).patch(UpdateJob).delete(DeleteJob);

export default router;
