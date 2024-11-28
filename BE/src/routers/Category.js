import express from "express";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/Category.js";


const category = express.Router();

category
  .get("/", getCategories)
  .get("/:id", getCategory)
  .post("/create", createCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);

export { category };
