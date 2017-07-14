const mongoose = require('mongoose');

// Schema for a forum post
const postSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	body:{
		type: String,
		required: true
	},
	creation_data:{
		type: Date,
		default: Date.now
	}
});

const Post = module.exports = mongoose.model('Post', postSchema);

module.exports.getPosts = function(callback, limit) {
	Post.find(callback).limit(limit);
}

module.exports.addPost = function(post, callback) {
	Post.create(post, callback);
}
