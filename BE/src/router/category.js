import express from "express";
import {
  createCategory,
  updateCategory,
  getCategorys,
  deleteCategory,
} from "../controller/category.js";

const category = express.Router();

category
  .get("/", getCategorys)
  .post("/create", createCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory);

export { category };
