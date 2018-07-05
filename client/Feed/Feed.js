Template.Feed.helpers({
	posts: function() {
		let postsDaCollection = Posts.find().fetch().reverse();
		return postsDaCollection;
	}
});