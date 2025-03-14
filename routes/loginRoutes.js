import { Router } from "express";
import loginController from "../controllers/loginController.js";
import validateLogin from "../middleware/loginMiddleware.js";

const router = Router();

router.post("/login", validateLogin, loginController.loginUser);

export default router;
