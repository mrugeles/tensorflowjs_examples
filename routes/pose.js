var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pose', { title: 'Pose detection' });
});

module.exports = router;