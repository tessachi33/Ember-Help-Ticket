import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    showTicketForm() {
      this.set('addNewTicket', true);
    },

    cancelNewTicket() {
      this.set('addNewTicket', false);
    },

    save() {
      var params = {
        studentName: this.get('studentName') ? this.get('studentName') : '',
        issue: this.get('issue') ? this.get('issue') : '',
        timeIssued: Date.now()
      };
      this.set('addNewTicket', false);
      this.sendAction('save', params);
    }
  }
});
