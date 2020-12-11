const router = require("express").Router();
const fs = require("fs");


router.get("/characters", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        res.json(JSON.parse(data));
    })
});

router.get("/characters/find/:routename", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) throw err;

        const allCharacters = JSON.parse(data);
        const search = req.params.routename;
        for (let i = 0; i < allCharacters.length; i++) {
            if (allCharacters[i].routeName === search) {
                return res.json(allCharacters[i]);
            }
        }
        return res.json({ msg: "the character you are searching for does not exist yo!" })
    })  
});

router.post("/characters/new", (req, res) => {
    console.log(req.body);
    // res.send("Yips");
    fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) throw err;
        const allCharacters = JSON.parse(data);
        allCharacters.push({
            routeName: req.body.routeName,
            name: req.body.name,
            role: req.body.role,
            age: parseInt(req.body.age),
            forcePoints: parseInt(req.body.forcePoints),
        })
        console.log(allCharacters);
        fs.writeFile("./data.json", JSON.stringify(allCharacters), (err) => {
            if (err) return res.JSON({ err: "problem adding"});
            return res.json({ msg: "successfully added"})
        })
    })
})
    module.exports = router;