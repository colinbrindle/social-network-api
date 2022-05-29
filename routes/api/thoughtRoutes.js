const router = require("express").Router();
const {
  getAllThoughts,
  addNewThought,
  thoughtById,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(addNewThought);

router.route("/:id").get(thoughtById).put(updateThought).delete(deleteThought);

module.exports = router;
