import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.get("/delete/:id", productController.deleteProduct);
router.put("/update", productController.updateProduct);

export default router;
