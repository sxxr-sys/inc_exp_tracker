import express from "express";
import {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
  getBarChartData,
  getRecordsByTransactionType,
} from "../controller/record.js";

const record = express.Router();

record
  .get("/", getRecords)
  .get("/barChart", getBarChartData)
  .get("/pieChart", getRecordsByTransactionType)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
