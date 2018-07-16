Template.Pesquisa.rendered = function() {
  Meteor.typeahead.inject();
};

Template.Pesquisa.helpers({
  items: function() {
    return Meteor.users.find().fetch().map(function(object) { 
    	return {id: object._id, value: object.profile.name}; 
    });
  },
  selected: function(event, suggestion, datasetName) {
    FlowRouter.go("/perfis/" + suggestion.id);
  }
});