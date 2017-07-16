$(function() {

	var $posts = $('#posts');

	$.ajax({
		type: 'GET',
		url: '/api/posts',
		success: function(data) {
			$.each(data, function(i, post) {
				$posts.append('<h1>'+post.title+'</h1><p>'+post.body+'</h1><hr>');
			});
		}
	});
});
