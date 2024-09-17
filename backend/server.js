import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserModal from "./models/Users.js";

import { createCanvas, loadImage, registerFont } from "canvas";
// import path, { dirname, join } from "path";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// import { Canvas } from "canvas-constructor";
// import canvas from "canvas";
// import { createCanvas, loadImage, registerFont } from "canvas";
// import path from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

registerFont(join(__dirname, "./fonts/impact.ttf"), {
  family: "Impact",
});

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/api/users", (req, res) => {
  UserModal.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/api", (req, res) => {
  UserModal.find({})
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;

  UserModal.findOneAndUpdate(
    { id },
    {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      role: req.body.role,
      address: req.body.address,
    },
    { new: true } // Return the updated document
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    })
    .catch((err) =>
      res.status(500).json({ message: "Server error", error: err })
    );
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  UserModal.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    })
    .catch((err) =>
      res.status(500).json({ message: "Server error", error: err })
    );
});

// app.get("/", (req, res) => {
//   res.send("Server is Ready!");
// });

app.get("/api/me", (req, res) => {
  const me = [
    {
      email: "yash.radicalloop@gmail.com",
      password: 123456,
      first_name: "Yash P",
      last_name: "Marakana",
      phone: "9909286298",
      role: "admin",
    },
  ];
  res.send(me);
});

app.get("/api/admin-login", (req, res) => {
  const admin = [
    {
      username: "YashMarakana",
      email: "yash.radicalloop@gmail.com",
      password: "12345678",
      id: 1,
    },
  ];
  res.send(admin);
});

app.get("/:feed", async (req, res) => {
  try {
    const img = await loadImage(
      "https://i.ibb.co/GJXb304/image.png"
      // "https://teckspace.files.wordpress.com/2011/08/twitter1.jpg"
    );
    const canvas = createCanvas(546, 384);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, 546, 384);

    // Set font and text style
    ctx.font = "28px Impact";
    ctx.fillStyle = "black"; // Set the text color
    ctx.textAlign = "left"; // Align text
    ctx.textBaseline = "top"; // Text baseline

    // Print text
    ctx.fillText(req.params.feed, 240, 120);

    const image = canvas.toBuffer();

    res.set({ "Content-Type": "image/png" });
    res.send(image);
  } catch (error) {
    res.status(500).send("Error processing image");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
