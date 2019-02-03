const path = require("path");
const router = require("express").Router();
const favoriteRoutes = require("./favorites");
const chuckRoutes = require("./chuck.js");

// Book routes
router.use("/books", favoriteRoutes);

// Google Routes
router.use("/chuck", chuckRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;