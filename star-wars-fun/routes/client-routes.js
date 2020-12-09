const router = require("express").Router();
// path module
const path = require("path")

// router.get("/characters", (req, res) => {
//     fs.readFile("./data.json", "utf8", (err, data) => {
//         if (err) throw err;
//         console.log(data);
//         res.json(JSON.parse(data));
//     })
// });
router.get("/", (req, res) => {
    // res.send(path.join(__dirname))
    res.sendFile(path.join(__dirname), "../client/index.html")
});

router.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname),"../client/add.html")
});

router.get("/find", (req, res) => {
    res.sendFile(path.join(__dirname),"../client/find.html")
});
module.exports = router;
