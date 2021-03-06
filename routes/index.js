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
router.get('/pages/cooperation/cooperation', function(req, res, next) {
  res.render('pages/cooperation/cooperation', { title: '渠道合作' });
});
router.get('/pages/aboutUs/aboutUs', function(req, res, next) {
  res.render('pages/aboutUs/aboutUs', { title: '关于我们' });
});
router.get('/pages/operate/operate', function(req, res, next) {
  res.render('pages/operate/operate', { title: '运营推广' });
});
router.get('/pages/order/order', function(req, res, next) {
  res.render('pages/order/order', { title: '定制开发' });
});

module.exports = router;
