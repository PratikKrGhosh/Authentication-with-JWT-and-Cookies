import express from "express";
import * as authController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter
  .route("/sign")
  .get(authController.renderSignInPage)
  .post(authController.signin);

authRouter
  .route("/register")
  .get(authController.renderRegisterPage)
  .post(authController.register);

export default authRouter;
