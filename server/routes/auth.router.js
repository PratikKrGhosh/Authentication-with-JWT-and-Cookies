import express from "express";
import * as authController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/sign", authController.renderSignInPage);
authRouter.get("/register", authController.renderRegisterPage);

export default authRouter;
