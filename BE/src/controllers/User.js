import { db } from "../../db.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password, avatar_img, currency_type } = req.body;

  const queryText = `
    INSERT INTO "user" (name, email, password, avatar_img, currency_type)
    VALUES($1, $2, $3, $4, $5) RETURNING *;
    `;
  const saltRounds = 12;

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    try {
      const result = await db.query(queryText, [
        name,
        email,
        hash,
        avatar_img,
        currency_type,
      ]);
      return res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Database Error" });
    }
  });
};

export const getUsers = async (req, res) => {
  const queryText = `
    SELECT * FROM "user"
    `;
  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const { email } = req.body;

  const queryText = `
    SELECT * FROM user WHERE email = $1
    `;
  try {
    const result = await db.query(queryText, [email]);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img, currency_type } = req.body;

  try {
    const result = await db.query(
      `UPDATE "user" SET name = $1, email = $2, password = $3, avatar_img = $4, currency_type = $5 WHERE id = $6 RETURNING *`,
      [name, email, password, avatar_img, currency_type, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM user WHERE id = $1", [id]);

    res.send("user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
