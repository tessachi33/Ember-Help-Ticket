import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket').then(function(data){
      return data.filterBy('isCompleted', false);
    }
  )},

  actions: {
    archiveTicket(ticket) {
      ticket.set('isCompleted', true);
      ticket.save();
      this.transitionTo('teacher');
    }
  }
});
