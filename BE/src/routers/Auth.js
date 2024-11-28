import express from "express";
import { signIn, signUp } from "../controllers/Auth.js";

const auth = express.Router();

auth.post("/sign-up", signUp).post("/sign-in", signIn);

export { auth };
