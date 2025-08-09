

//require wont work in next js so we use next js
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB (anees)");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
