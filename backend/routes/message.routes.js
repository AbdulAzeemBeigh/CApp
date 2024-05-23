import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protect from "../middleware/protectRoutes.js";
const router = express.Router();

router.get("/:id", protect, getMessage);
router.post("/send/:id", protect, sendMessage);

export default router;
