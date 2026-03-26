import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running ✅");
});


app.listen ( process.env.PORT , ()=>{
    console.log(`port is connected on ${process.env.PORT}`)
})