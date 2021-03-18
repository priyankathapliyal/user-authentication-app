let express = require("express");
let path = require("path");

const router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

module.exports = router;