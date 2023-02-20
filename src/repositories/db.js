import pg from "pg";

export const connect = async () => {
  
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://dojlxqxi:RRJWt2nlNflTfISLBsHTgyfQV6MtH0Yd@babar.db.elephantsql.com/dojlxqxi",
  });
  
  global.connection = pool;

  return pool.connect();
};
