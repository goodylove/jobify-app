import { Router } from "express";
import {
  CreateJob,
  DeleteJob,
  GetAllJobs,
  GetSingleJob,
  UpdateJob,
} from "../controllers/JobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(GetAllJobs).post(validateJobInput, CreateJob);
router
  .route("/:id")
  .get(validateIdParam, GetSingleJob)
  .patch(validateJobInput, validateIdParam, UpdateJob)
  .delete(validateIdParam, DeleteJob);

export default router;
