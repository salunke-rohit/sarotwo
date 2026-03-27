import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://sarotwo.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running ✅");
});


app.listen ( process.env.PORT , ()=>{
    console.log(`port is connected on ${process.env.PORT}`)
})