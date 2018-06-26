FlowRouter.route("/", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
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