const router = require("express").Router();
// path module
const path = require("path");


router.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/add.html"));
});

router.get("/find", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/find.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = router;
