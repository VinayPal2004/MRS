import express from "express";
import Material from "../Models/material.js";
const router = express.Router();

// Add Material
router.post("/", async (req, res) => {
  try {
    const material = await Material.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Materials
router.get("/", async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;