import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/User.js";

const user = express.Router();

user
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/create", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export { user };
