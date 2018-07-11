Template.Post.helpers({
	usernameDoAutor: function() {
		let idDoAutor = this.idDoAutor;
		let autor = Meteor.users.findOne({_id: idDoAutor})
		return autor.username;
	},
	numeroDeCurtidas: function() {
		return this.curtidas.length;
	},
	usuarioCurtiu: function() {
		let curtidas = this.curtidas;
		let posicao = curtidas.indexOf(Meteor.userId());

		if(posicao === -1) {
			return false;
		} else {
			return true;
		}
	},
	comentarios: function() {
		return Comentarios.find({post: this._id}).fetch();
	},
	autorDoPost: function() {
		let idDoAutor = this.idDoAutor;
		if(idDoAutor === Meteor.userId()) {
			return true;
		} else {
			return false;
		}

	}
});

Template.Post.events({
	"click .like-button": function(event, template) {
		Meteor.call("curtirPost", template.data._id);

	},
	"click .dislike-button": function(event, template) {
		Meteor.call("descurtirPost", template.data._id);

	},
	"click .remove-button": function(event,template) {
		Meteor.call("removePost", template.data._id);
	}
});