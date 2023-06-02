import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Error in connecting with database ${error}`);
  }
};

export default connectDB;
