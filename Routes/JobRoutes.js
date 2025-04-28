import { Router } from "express";
import {
  CreateJob,
  DeleteJob,
  GetAllJobs,
  GetSingleJob,
  showStats,
  UpdateJob,
} from "../controllers/JobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/")
  .get(GetAllJobs)
  .post(checkForTestUser, validateJobInput, CreateJob);

router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(checkForTestUser, validateIdParam, GetSingleJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, UpdateJob)
  .delete(checkForTestUser, validateIdParam, DeleteJob);

export default router;
