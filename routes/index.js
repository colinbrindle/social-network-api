const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>
  res.json("Please use an API route, i.e.: /api/users or /api/thoughts")
);

module.exports = router;
