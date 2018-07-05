FlowRouter.route("/", {
  action: function(params, queryParams) {
    if (Meteor.userId() === null) {
  	  BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
    } else {
      FlowRouter.go("/Feed")
    }
  }
});

FlowRouter.route("/Sobre", {
  action: function(params, queryParams) {
  	BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
  }
});

FlowRouter.route("/Feed", {
	triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});

FlowRouter.route("/Perfis/:id", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});
  }
});