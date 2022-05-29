const router = require("express").Router();
const {
  getAllUsers,
  addNewUser,
  userById,
  updateById,
  deleteById,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(addNewUser);

router.route("/:id").get(userById).put(updateById).delete(deleteById);

module.exports = router;
