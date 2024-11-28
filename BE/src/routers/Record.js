import express from "express";
import { createRecord, deleteRecord, getRecord, getRecords, updateRecord } from "../controllers/Record.js";


const record = express.Router();

record
  .get("/", getRecords)
  .get("/:id", getRecord)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
