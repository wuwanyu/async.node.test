var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/list', function(req, res, next) {
  res.render('list');
});

router.get('/info', function(req, res, next) {
  res.render('info');
});

module.exports = router;
