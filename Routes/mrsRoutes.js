import express from "express";
import Order from "../Models/order.js";

const router = express.Router();

// Generate MRS Report
router.get("/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate({
        path: "product",
        populate: {
          path: "bom.material",
        },
      })
      .populate("company");

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    const materials = order.product.bom.map((item) => {
      const requiredQty =
        item.quantityPerPiece * order.quantity;

      const availableStock =
        item.material.stock || 0;

      return {
        materialName: item.material.name,
        unit: item.material.unit,
        quantityPerPiece: item.quantityPerPiece,
        requiredQty,
        availableStock,
        shortage:
          requiredQty > availableStock
            ? requiredQty - availableStock
            : 0,
      };
    });

    res.status(200).json({
      company: order.company.companyName,
      product: order.product.productName,
      orderQuantity: order.quantity,
      materials,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;