var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.json({ "proba": ["Dinca", "Laurentiu"] })
});

module.exports = router;
