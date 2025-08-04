import express from 'express';
const router = express.Router();
import UserData from "../models/UserData.js"; 
import getUserData from "../middleware/getUserData.js"; 

router.get("/:id", getUserData, (req, res) => {
  res.status(200).json(res.user);
});

router.patch("/:id", getUserData, async (req, res) => {
  try {
    Object.assign(res.user, req.body);
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}) 


export default router