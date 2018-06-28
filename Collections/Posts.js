Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
		if(Meteor.userId() !== null) {
			Posts.insert({
			texto: textoDoFormulario,
			idDoAutor: Meteor.userId(),
			curtidas: []
		});
		}
	},
	"curtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
			$addToSet: {
				curtidas: Meteor.userId()
			}
		});
	},
	"descurtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
			$pull: {
				curtidas: Meteor.userId()	
			}
		});
	}
});