import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { registerFont } from "canvas";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import userRoutes from "./userRoutes.js";
import imageRoutes from "./imageRoutes.js"; // Import your Image model

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

registerFont(join(__dirname, "./fonts/impact.ttf"), {
  family: "Impact",
});

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.use("/api", userRoutes);

app.use("/api/images", imageRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
