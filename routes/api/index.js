const path = require("path");
const router = require("express").Router();
const favoriteRoutes = require("./favorites");
const chuckRoutes = require("./chuck.js");
const designerRoutes = require("./designer");
const buddaRoutes = require("./budda");

router.use("/favorites", favoriteRoutes);

router.use("/chuck", chuckRoutes);

router.use("/designer", designerRoutes);

router.use("/budda", buddaRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;