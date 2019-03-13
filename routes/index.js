var express = require('express');
var router = express.Router();

// 网站地图
router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', { title: '网址地图' });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pages/news/news', function(req, res, next) {
  res.render('pages/news/news', { title: '新闻中心' });
});

module.exports = router;
