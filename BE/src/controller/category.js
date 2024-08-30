import { db } from "../../db.js";
import { handleError } from "../utils/handleError.js";

export const getCategorys = async (req, res) => {
  const queryText = "SELECT * FROM category";
  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (err) {
    handleError(err, res)
  }
};

export const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const queryText = `INSERT INTO category (name, description, category_image) VALUES ($1, $2, $3) RETURNING *`;

  try {
    const result = await db.query(queryText, [
      name,
      description,
      category_image,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    handleError(err, res)
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_image } = req.body;

  try {
    const result = await db.query(
      "UPDATE category SET name = $1, description = $2, category_image = $3 WHERE id = $4 RETURNING *",
      [name, description, category_image, id]
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

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const queryText = "DELETE FROM category WHERE id = $1";

  try {
    await db.query(queryText, [id]);
    res.send("category deleted");
  } catch (err) {
    handleError(err, res)
  }
};
