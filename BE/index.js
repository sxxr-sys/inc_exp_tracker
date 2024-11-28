import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { user } from "./src/routers/User.js";
import { record } from "./src/routers/Record.js";
import { category } from "./src/routers/Category.js";
import { auth } from "./src/routers/Auth.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", user);
app.use("/record", record);
app.use("/category", category);
app.use("/auth", auth);

app.get("/installExtension", async (req, res) => {
  const tableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  db.query(tableQueryText);
  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("extension installed successfully");
});

app.get("/usertable", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "user" (
   id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) UNIQUE NOT NULL,
    password TEXT,
    avatar_img TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type currency_type DEFAULT 'MNT'
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("user table created succesfully");
});

app.get("/recordtable", async (req, res) => {
  let tableQueryText = `
 CREATE TABLE "record" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
    category_id uuid NOT NULL,
    FOREIGN KEY (user_id)
    references user(id),
    FOREIGN KEY (category_id)
    references category(id),
    name TEXT,
    amount REAL NOT NULL,
    transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("record table created succesfully");
});

app.get("/categorytable", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "category" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100),
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("category table created succesfully");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
