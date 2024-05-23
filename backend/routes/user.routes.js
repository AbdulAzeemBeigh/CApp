import express from "express";
import protect from "../middleware/protectRoutes.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protect, getUsersForSideBar);

export default router;
