import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        studentName: this.get('studentName') ? this.get('studentName') : '',
        issue: this.get('issue') ? this.get('issue') : '',
        timeIssued: Date.now()
      };
      this.sendAction('save', params);
    }
  }
});
