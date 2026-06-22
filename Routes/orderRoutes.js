import express from "express";
import Order from "../Models/order.js";

const router = express.Router();

// Create Order
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("company")
      .populate("product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;