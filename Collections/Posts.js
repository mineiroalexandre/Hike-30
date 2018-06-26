Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
		Posts.insert({
			texto: textoDoFormulario,
			idDoAutor: Meteor.userId()
		});
	}
});