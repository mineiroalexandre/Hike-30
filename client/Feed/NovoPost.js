Template.NovoPost.onCreated(function() {
	this.urlDaImagem = new ReactiveVar(); 
});

Template.NovoPost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		let textoDoFormulario = event.target.texto.value;
		let urlDaImagem = template.urlDaImagem.get()

		console.log(textoDoFormulario);
		console.log(urlDaImagem);

		Meteor.call("inserirPost", textoDoFormulario, urlDaImagem);
		
		event.target.texto.value = "";
	},
	"change .myFileInput": function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, fileObj) {
				if (err) {
					// handle error
				} else {
					template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);
				}
			});
		});	
	}
});
