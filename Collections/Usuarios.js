Meteor.methods({
	"seguirUsuario": function(IdDoUsuario) {
		if(Meteor.userId() !== IdDoUsuario) {
			Meteor.users.update(Meteor.userId(), {
				$addToSet: {
					"profile.seguindo": IdDoUsuario
				}
			});

			Meteor.users.update(IdDoUsuario, {
				$addToSet: {
					"profile.seguidores": Meteor.userId()
				}
			});
		}
	},
	"deixarDeSeguirUsuario": function(IdDoUsuario) {
		if(Meteor.userId() !== IdDoUsuario) {
			Meteor.users.update(Meteor.userId(), {
				$pull: {
					"profile.seguindo": IdDoUsuario
				}
			});

			Meteor.users.update(IdDoUsuario, {
				$pull: {
					"profile.seguidores": Meteor.userId()
				}
			});
		}
	}
});