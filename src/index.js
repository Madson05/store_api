import express from "express";

import clientsRouter from "./routes/client.route.js";
import productsRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";
import suppliersRouter from "./routes/supplier.route.js";
import cors from "cors";
import winston from "winston";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store.api.log" }),
  ],

  format: combine(
    label({ label: "store-api" }),
    timestamp(),
    myFormat),
});

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/clients", clientsRouter);
app.use("/products", productsRouter);
app.use("/sales", salesRouter);
app.use("/suppliers", suppliersRouter);
app.use((error, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} ${error.message}`);
  res.status(400).send({ error: error.message });
});

app.listen(port, () => global.logger.info("API started on port " + port));
