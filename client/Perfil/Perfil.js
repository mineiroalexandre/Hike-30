Template.Perfil.helpers({
	perfil: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		let info = Meteor.users.findOne({_id: idDoUsuario});

		return info;
	},
	posts: function() {
		let idDoUsuario = FlowRouter.getParam("id");
		let postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();
		return postsDoPerfil;
	}
});