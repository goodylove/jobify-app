import express from "express";
import { Login, Logout, Register } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisteredUserInput,
} from "../middleware/validationMiddleware.js";

const Router = express.Router();

Router.post("/register", validateRegisteredUserInput, Register);
Router.post("/login", validateLoginInput, Login);
Router.get("/logout", Logout);

export default Router;
