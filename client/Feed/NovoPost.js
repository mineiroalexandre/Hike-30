Template.NovoPost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		let textoDoFormulario = event.target.texto.value;

		Meteor.call("inserirPost", textoDoFormulario);
		
		event.target.texto.value = "";
	}
});
