const router = require("express").Router();
const buddaController = require("../../controllers/buddaController");

router.route("/")
  .get(buddaController.findAll);


module.exports = router;