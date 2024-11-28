import { db } from "../../db.js";

export const createCategory = async (req, res) => {
  const { id, name, description, category_image } = req.body;

  const queryText = `
    INSERT INTO category (name, description, category_image)
    VALUES($1, $2, $3) RETURNING *;
    `;

  try {
    await db.query(queryText, [name, description, category_image]);
  } catch (error) {
    console.log(error);
  }
  res.send("category user created succesfully");
};

export const getCategories = async (req, res) => {
  const queryText = `
    SELECT * FROM category
    `;

  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (req, res) => {
  const { id } = req.params;

  const queryText = `
    SELECT * FROM category WHERE id = $1
    `;

  try {
    const result = await db.query(queryText, [id]);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
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
      res.status(404).json({ error: "category not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM category WHERE id = $1", [id]);

    res.send("category user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
