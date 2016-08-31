var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Project-Game Main' });
});

router.get('/input', function(req, res, next) {
	res.render('input', { title: 'Project-Game Main' });
});

router.post('/output', function(req, res, next) {
	res.render('output', { title: 'Project-Game Main' });
	res.render('output', { user_id: req.body.user_id });
});

module.exports = router;
