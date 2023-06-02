import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductsController,
  updateProductController,
} from "../controllers/productController.js";

// Setting up the router
const router = express.Router();

// Creating API's

// Creating the product
router.post("/create", createProductController);

// For getting the product
router.get("/get-products", getProductsController);

// For deleting the product
router.post("/delete-product/:id", deleteProductController);

// For updating the product
router.post("/update-product/:id", updateProductController);

export default router;
