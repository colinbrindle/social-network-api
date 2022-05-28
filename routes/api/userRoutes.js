const router = require("express").Router();
const { getAllUsers, addNewUser } = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(addNewUser);

module.exports = router;
