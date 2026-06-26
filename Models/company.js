import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },

    email: String,

    phone: String,

    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Company", companySchema);