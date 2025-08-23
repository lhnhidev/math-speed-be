import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      "mongodb+srv://nthung:pQSvICBkPYPqStrz@cluster0.dieupnv.mongodb.net/math-speed-backend?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(mongoUri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
