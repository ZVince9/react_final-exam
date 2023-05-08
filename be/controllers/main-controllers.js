import User from "../models/users.js";
import dotenv from "dotenv";
dotenv.config();

export const getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(404).json("Error");
  }
};

export const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (e) {
    res.json({ message: "Error occured" });
  }
};

export const postUser = async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const validatedNewUser = new User(newUser);
    const savedData = await validatedNewUser.save();

    res.json(savedData);
  } catch (e) {
    console.log(e);
    res.status(404).json("Error");
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    await User.findByIdAndUpdate(userId, updatedUserData);
    const updatedUser = await User.findById(userId);

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId);

    res.json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured" });
  }
};
