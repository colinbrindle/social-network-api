const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

/* User APIs
GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT to update a user by its _id

DELETE to remove user by its _id
*/

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// POST new user
const addNewUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
};
