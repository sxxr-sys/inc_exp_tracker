import { db } from "../../db.js";
import bcrypt from "bcrypt";
import { handleError } from "../utils/handleError.js";

export const getUsers = async (req, res) => {
  const queryText = "SELECT * FROM users";
  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (err) {
    handleError(err, res)
  }
};

export const getUsersWithFilter = async (req, res) => {
  let body = req.body;
  const { query } = body;
  delete body.query;
  
  let queryText = "SELECT * FROM users ";
  queryText = queryText + query;

  try {
    const result = await db.query(queryText, [...Object.values(body)]);
    res.status(200).json(result.rows);
  } catch (err) {
    handleError(err, res)
  }
};

export const getUser = async (req, res) => {
  const { email } = req.body;
  const queryText = "SELECT * FROM users WHERE email = $1";
  try {
    const result = await db.query(queryText, [email]);
    return result.rows;
  } catch (err) {
    handleError(err, res)
  }
};

export const createUser = async (req, res) => {
  const { email, name, password, avatar_image, currency_type } = req.body;
  const queryText = `INSERT INTO users (email, name, password, avatar_image, currency_type) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  const saltRounds = 10;
  
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    try {
      const result = await db.query(queryText, [
        email,
        name,
        hash,
        avatar_image,
        currency_type,
      ]);
      res.status(201).json({ success: true, user: result.rows[0]});
    } catch (err) {
      handleError(err, res)
    }
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const result = await db.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: " not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    handleError(err, res)
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const queryText = "DELETE FROM users WHERE id = $1";

  try {
    await db.query(queryText, [id]);
    res.send("user deleted");
  } catch (err) {
    handleError(err, res)
  }
};
