import { db } from "../../db.js";

export const createRecord = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  const queryText = `
    INSERT INTO record (user_id, name, amount, transaction_type, description, category_id)
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *;
    `;

  try {
    await db.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
  } catch (error) {
    console.log(error);
  }
  res.send("record user created succesfully");
};

export const getRecords = async (req, res) => {
  const queryText = `
    SELECT * FROM record
    `;

  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getRecord = async (req, res) => {
  const { id } = req.params;

  const queryText = `
    SELECT * FROM record WHERE id = $1
    `;

  try {
    const result = await db.query(queryText, [id]);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  try {
    const result = await db.query(
      "UPDATE record SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6 WHERE id = $7 RETURNING *",
      [user_id, name, amount, transaction_type, description, category_id, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM record WHERE id = $1", [id]);

    res.send("record user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
