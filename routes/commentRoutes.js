import express from "express";
const router = express.Router();
import {
  createComment,
  updateComment,
} from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, createComment);
router.put("/:commentId", authGuard, updateComment);

export default router;
