import { Router } from "express";
import {
  CreateJob,
  DeleteJob,
  GetAllJobs,
  GetSingleJob,
  UpdateJob,
} from "../controllers/JobController.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(GetAllJobs).post(validateJobInput, CreateJob);
router.route("/:id").get(GetSingleJob).patch(UpdateJob).delete(DeleteJob);

export default router;
