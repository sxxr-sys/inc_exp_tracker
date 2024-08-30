import express, { response } from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { user } from "./src/router/user.js";
import { category } from "./src/router/category.js";
import { record } from "./src/router/record.js";
import { auth } from "./src/router/auth.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/user', user)
app.use('/category', category)
app.use('/record', record)
app.use('/api', auth)



app.get("/installExtension", async (req, res) => {
  //table create
  const TableQueryText = `CREATE TABLE IF NOT EXISTS users `;

  try {
    db.query(TableQueryText);

    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.get("/createTable", async (req, res) => {
  //table create
  const TableQueryText = `
  CREATE TABLE "users" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50)  NOT NULL,
    password TEXT,
    avatar_image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type currency_type DEFAULT 'USD' NOT NULL
  );
`;
  try {
    db.query(TableQueryText);

    res.send("success");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`my backend listening on port ${port}`);
});
