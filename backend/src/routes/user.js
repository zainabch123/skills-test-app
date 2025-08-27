import { Router } from "express";
const router = Router();
import { loginUser } from "../controllers/user.js";

// Login new users:
router.post("/login", loginUser);

export default router;
