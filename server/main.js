import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AccountsTemplates.configure({
	postSignUpHook: function(userId, info) {
		Meteor.users.update(userId, {
			$set: {
				"profile.seguidores": [],
				"profile.seguindo": []
			}
		});
	}
});

Meteor.publish("posts", function() {
	let usuario = Meteor.users.findOne({_id: Meteor.userId()});
	let seguindo = usuario.profile.seguindo;
	let autores = seguindo;
	autores.push(Meteor.userId());

	return Posts.find({idDoAutor: {$in: autores}});
});

Meteor.publish("usuarios", function() {
	return Meteor.users.find({}, {fields: {
		"username": 1,
		"_id": 1,
		"profile": 1
	}});
});

Meteor.publish("comentarios", function(idDoPost) {
	return Comentarios.find({post: idDoPost});
});