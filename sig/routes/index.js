var express = require('express');
var router = express.Router();
var crypto  = require("crypto");
var config = require('../config');

/* GET home page. */
router.post('/sign', function(req, res, next) {
  var sig = crypto
        .createHmac("SHA256", config.clientKey)
        .update(req.body.body).digest("base64");
  res.json({sig});
});

module.exports = router;
