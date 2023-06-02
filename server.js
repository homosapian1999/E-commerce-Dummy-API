import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";

// Configuring tha app
const app = express();

// Settting up the dotenv file
dotenv.config();

// Conneecting the database
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/product", productRoute);

// Setting up the port
const PORT = process.env.PORT;

// listening the port
app.listen(PORT, () => {
  console.log(`Server is up and running with Homosapian as Admin`);
});
