Template.Feed.helpers({
	posts: function() {
		let postsDaCollection = Posts.find().fetch();
		return postsDaCollection;
	}
});