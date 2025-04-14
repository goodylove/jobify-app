import express from "express";
import { Login, Register } from "../controllers/authController.js";

const Router = express.Router();

Router.post("/register", validateRegisteredUserInput, Register);
Router.post("/login", Login);

export default Router;
