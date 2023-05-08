import User from "../models/users.js";

export const UserAppears = async (req, res, next) => {
  try {
    const UserId = req.params.id;

    const userAppears = await User.findById(UserId);

    if (!userAppears) {
      res.status(404).json({ message: "Post not found" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
