import UserData from "../models/UserData.js";

async function getUserData(req, res, next) {
  let user;
  try {
    user = await UserData.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

export default getUserData