import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Connected to Data Base successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error
    );

  
  }
};

export default connectDB;