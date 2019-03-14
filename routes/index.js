var express = require('express');
var router = express.Router();

// 网站地图
router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', { title: '网址地图' });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '宇信官网' });
});
router.get('/pages/solution/shopping', function(req, res, next) {
  res.render('pages/solution/shopping', { title: '商城类' });
});
router.get('/pages/solution/food', function(req, res, next) {
  res.render('pages/solution/food', { title: '餐饮' });
});

module.exports = router;
