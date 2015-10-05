import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    archive(ticket) {
      if (confirm('Are you sure you want to archive this ticket?')) {
        this.sendAction('archiveTicket', ticket);
      }
    }
  }
});
