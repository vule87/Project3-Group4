const router = require("express").Router();
const designerController = require("../../controllers/designerController");

router.route("/")
  .get(designerController.findAll);


module.exports = router;