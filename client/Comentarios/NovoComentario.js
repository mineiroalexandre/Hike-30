Template.NovoComentario.events({
	"submit form": function(event, template) {
		event.preventDefault();
		let texto = event.target.text.value;
		let idDoPost = template.data._id;

		Meteor.call("inserirComentario", texto, idDoPost);

		event.target.text.value = "";
	}
});