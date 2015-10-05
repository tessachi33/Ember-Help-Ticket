import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        studentName: this.get('studentName') ? this.get('studentName') : '',
        issue: this.get('issue') ? this.get('issue') : '',
        timeIssued: Date.now(),
        isCompleted: false
      };
      this.sendAction('save', params);
      alert("Thanks " + this.get('studentName') + "! We'll get right on it!");
    }
  }
});
