import { db } from "../../db.js";
import _ from "lodash";
import { handleError } from "../utils/handleError.js";

export const getBarChartData = async (req, res) => {
  const queryText = `SELECT * FROM record`;
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  try {
    const result = await db.query(queryText);

    const groupedData = _.groupBy(result.rows, (el) => {
      return months[new Date(el.createdat).getMonth()];
    });

    // console.log(groupedData,'data')

    const response = _.map(groupedData, (monthRecords, month) => {
      const totalAmount = monthRecords.reduce(
        (acc, record) => {
          record.transaction_type === "INC"
            ? (acc.income += record.amount)
            : (acc.expense += record.amount);
          return acc;
        },
        { income: 0, expense: 0 }
      );
      return { month, ...totalAmount };
    });

    res.status(200).json(response);
  } catch (error) {
    handleError(res, error);
  }
};

export const getRecords = async (req, res) => {
  const queryText = `SELECT * FROM record`;

  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (error) {
    handleError(res, error);
  }
};

export const getRecordsByTransactionType = async (req, res) => {
  const queryText = `
    SELECT record.*, category.name AS categoryName
    FROM record
    INNER JOIN category ON record.category_id = category.id
    WHERE transaction_type = 'EXP';
  `;
  

  try {
    const result = await db.query(queryText);
    const groupByCategoryName = _.groupBy(result.rows, (row) => row.categoryname)
    const response = _.map(groupByCategoryName, (category) => category.reduce((acc, row) => {
      acc.amount += row.amount;
      return acc
    }))
    
    res.status(200).json(response);
  } catch (error) {
    handleError(res, error);
  }
};

export const createRecord = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  const queryText = `
    INSERT INTO record (user_id, name, amount, transaction_type, description, category_id)
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING *;
  `;

  try {
    const result = await db.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    handleError(res, error);
  }
};

export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  const queryText = `
    UPDATE record 
    SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6 
    WHERE id = $7 
    RETURNING *;
  `;

  try {
    const result = await db.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
      id,
    ]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const queryText = "DELETE FROM record WHERE id = $1";

  try {
    await db.query(queryText, [id]);
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
