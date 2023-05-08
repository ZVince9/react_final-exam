import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log("MongoDB connected");
    }
  } catch (e) {
    console.log("Error connected to Mongo" + e);
  }
};

export default connectMongoDB;
