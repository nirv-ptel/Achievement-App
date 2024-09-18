import express from "express";
import UserModal from "./models/Users.js";

const router = express.Router();

router.post("/users", (req, res) => {
  UserModal.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

router.get("/", (req, res) => {
  UserModal.find({})
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

router.put("/users/:id", (req, res) => {
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

router.delete("/users/:id", (req, res) => {
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

router.get("/me", (req, res) => {
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

router.get("/admin-login", (req, res) => {
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

export default router;
