import express from 'express';
const router = express.Router();
import User from "../models/User.js"; // Assuming User model is exported as default
import getUser from "../middleware/getUser.js"; // Assuming getUser middleware is exported as default

// Define your routes here

router.post("/", async (req, res) => {
  const { name, email, password, age, gender, phone, address } = req.body;

  const user = new User({
    name,
    email,
    password,
    age,
    gender,
    phone,
    address,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getUser, (req, res) => {
  res.status(200).json(res.user);
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.deleteOne();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  try {
    Object.assign(res.user, req.body);
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router; // Export router as default
