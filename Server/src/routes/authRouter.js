import express from "express";
import { UserRegister } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", UserRegister);

export default router;
