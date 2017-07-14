var express = require('express');
var router = express.Router();

Post = require('../models/post');

router.get('/posts', function(req, res, next) {
	Post.getPosts(function(err, posts) {
		if (err) {
			throw err;
		}
		res.json(posts);
	});
});

router.post('/posts', function(req, res, next) {
	var post = req.body;
	Post.addPost(post, function(err, post) {
		if (err) {
			throw err;
		}
		res.json(post);
	})
});

module.exports = router;
