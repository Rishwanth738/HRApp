import express from "express";
import { submitTask, getResult } from "../controllers/resultController.js";
import authenticateToken from "../middleware/auth.js";

const router = express.Router();

router.post("/:taskId", authenticateToken, submitTask);
router.get("/", authenticateToken, getResult);

export default router;
