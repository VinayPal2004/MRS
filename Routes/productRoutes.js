import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Add Product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find()
      .populate("bom.material");

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;