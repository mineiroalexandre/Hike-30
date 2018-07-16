Template.Comentario.helpers({
	usernameDoAutor: function() {
		let idDoAutor = this.autor;
		let autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;
	}
});