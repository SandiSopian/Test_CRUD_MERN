import User from "../models/UserModels.js";

// Cek koneksi database
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

// Get data by id user
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ massage: error.massage });
  }
};

// Post/Create new data user
export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertuser = await user.save();
    res.status(201).json(insertuser);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
};

// Get data by id user
export const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
};

// Get data by id user
export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ massage: error.massage });
  }
};
