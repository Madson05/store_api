import { connect } from "./db.js";

const insertProduct = async (product) => {
  const conn = await connect();
  try {
    const sql =
      "INSERT INTO products (name, description, value, stock, supplier_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      product.name,
      product.description,
      product.value,
      product.stock,
      product.supplier_id,
    ];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getProducts = async () => {
  const conn = await connect();
  try {
    const res = await conn.query("SELECT * FROM products");
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const getProduct = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "SELECT * from products where product_id = $1;",
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
      "SELECT product_id from products where product_id = $1;",
      [id]
    );

    if(res.rows[0]) {
      return true;
    }

    throw new Error("product_id não existente.");
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const updateProduct = async (product) => {
  const conn = await connect();
  try {

    const sql =
      "UPDATE products SET name = $1, description = $2, value = $3, stock = $4, supplier_id  = $5 WHERE product_id = $6 RETURNING *";
    const values = [
      product.name,
      product.description,
      product.value,
      product.stock,
      product.supplier_id,
      product.product_id,
    ];

    

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
};

const deleteProduct = async (id) => {
  const conn = await connect();
  try {
    const res = await conn.query(
      "DELETE from products where product_id = $1 RETURNING *;",
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
  insertProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  checkId
};
