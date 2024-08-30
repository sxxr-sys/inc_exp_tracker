import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersWithFilter,
  updateUser,
} from "../controller/user.js";

const user = express.Router();

user
  .get("/", getUsers)
  .post("/create", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)
  .get('/filter',getUsersWithFilter )

export { user };
