Template.Feed.onCreated(function() {
 Meteor.subscribe("posts");
});

Meteor.subscribe("usuarios");

Template.Feed.helpers({
	posts: function() {
		let postsDaCollection = Posts.find().fetch().reverse();
		return postsDaCollection;
	}
});