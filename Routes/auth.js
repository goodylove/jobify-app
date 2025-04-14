import express from "express";
import { Login } from "../controllers/authController";

const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);

export default Router;
