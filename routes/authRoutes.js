import { Router } from "express";
import authController from "../controllers/authController.js";
import validateRegistration from "../middleware/authMiddleware.js";

const router = Router();

// Register route with validation middleware
router.post("/register", validateRegistration, authController.registerUser);

export default router;
