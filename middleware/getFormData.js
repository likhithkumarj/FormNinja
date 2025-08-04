import DynamicForm from "../models/FormData";

async function getUser(req, res, next) {
  let user;
  try {
    user = await DynamicForm.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

export default getUser