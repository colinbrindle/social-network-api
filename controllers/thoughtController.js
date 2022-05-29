const { ObjectId } = require("mongoose").Types;
const { Thought, User } = require("../models");

// GET all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  } catch (err) {
    res.status(400).json(err);
  }
};

// POST new thought
const addNewThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    const thoughtUser = await User.findOneAndUpdate(
      {
        username: req.body.username,
      },
      { $addToSet: { thoughts: newThought._id } },
      {
        new: true,
      }
    );
    res.status(200).json(newThought);
  } catch (err) {
    res.status(400).json(err);
  }
};

// GET by thought id
const thoughtById = async (req, res) => {
  try {
    const singleThought = await Thought.findOne({ _id: req.params.id });
    res.status(200).json(singleThought);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE / PUT thought by id
const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      { _id: req.body.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.status(200).json(updatedThought);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DELETE thought by id
const deleteThought = async (req, res) => {
  try {
    const targetThought = await Thought.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(targetThought);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllThoughts,
  addNewThought,
  thoughtById,
  updateThought,
  deleteThought,
};
