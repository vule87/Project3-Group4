const router = require("express").Router();
const chuckController = require("../../controllers/chuckController");

router.route("/")
  .get(chuckController.findAll);


module.exports = router;