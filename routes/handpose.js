var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('handpose', { title: 'Hand pose detection' });
});

module.exports = router;