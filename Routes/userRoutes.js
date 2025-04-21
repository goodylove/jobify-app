import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUserInput } from "../middleware/validationMiddleware.js";
import { authorizedPermission } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizedPermission("admin"),
  getApplicationStats,
]);
router.patch("/update-user", validateUserInput, updateUser);

export default router;
