import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://sarotwo.vercel.app",
    "https://sarotwo-73mn6g246-salunke-rohits-projects.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running ✅");
});

const startServer = async () => {

  try {

    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.log("Server failed:", error.message);

  }
};

startServer();