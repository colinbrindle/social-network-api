const router = require("express").Router();
const {
  getAllUsers,
  addNewUser,
  userById,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(addNewUser);

router.route("/:id").get(userById).put(updateUser).delete(deleteUser);

module.exports = router;
