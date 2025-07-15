import express from "express";
import { createTask, getAssignedTasks} from "../controllers/taskController.js";
import authenticateToken from "../middleware/auth.js";

const router = express.Router();

router.post("/",authenticateToken, createTask);
router.get("/", authenticateToken, getAssignedTasks);

export default router;