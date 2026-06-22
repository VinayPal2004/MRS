import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import materialRoutes from "./Routes/materialRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import companyRoutes from "./Routes/companyRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";
import mrsRoutes from "./Routes/mrsRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/materials", materialRoutes);
app.use("/api/products", productRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/mrs", mrsRoutes);


app.get("/", (req, res) => {
  res.send("MRS API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});