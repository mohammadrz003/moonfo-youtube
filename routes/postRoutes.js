import express from "express";
const router = express.Router();
import { createPost, updatePost } from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGuard, createPost);
router.put("/:slug", authGuard, adminGuard, updatePost);

export default router;
