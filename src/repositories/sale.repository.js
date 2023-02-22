import { connect } from "./db.js";

const insertSale = async (sale) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO sales (value, date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *";
    const client_ids = [
      sale.value,
      sale.date,
      sale.client_id,
      sale.product_id,
      
    ];

    const res = await conn.query(sql, client_ids);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSales = async () => {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM sales");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getSale = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * from sales where sale_id = $1;",
      [id]
    );

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const checkId = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT sale_id from sales where sale_id = $1;",
      [id]
    );

    if(res.rows[0]) {
      return true;
    }

    throw new Error("sale_id não existente.");
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateSale = async (sale) => {
  const conn = await connect();
  try {
    const sql =
      "UPDATE sales SET value = $1, date = $2, client_id = $3, product_id = $4 WHERE sale_id = $5 RETURNING *";
    const client_ids = [
      sale.client_id,
      sale.date,
      sale.client_id,
      sale.product_id,
      sale.id,
    ];

    const res = await conn.query(sql, client_ids);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteSale = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "DELETE from sales where sale_id = $1 RETURNING *;",
      [id]
    );

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};
export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  checkId
};
