const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
};

// POST new user
const addNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

// GET user by ID
const userById = async (req, res) => {
  try {
    const singleUser = await User.findOne({ _id: req.params.id });
    res.status(200).json(singleUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.body.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const targetUser = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(targetUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
  userById,
  updateById,
  updateById,
  deleteById,
};
