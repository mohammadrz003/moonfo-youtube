import express from "express";
const router = express.Router();
import {
  createPostCategory,
  deletePostCategory,
  getAllPostCategories,
  updatePostCategory,
} from "../controllers/postCategoriesController";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

router
  .route("/:postCategoryId")
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

export default router;
