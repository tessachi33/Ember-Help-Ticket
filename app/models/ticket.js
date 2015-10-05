import DS from 'ember-data';

export default DS.Model.extend({
  studentName: DS.attr(),
  issue: DS.attr(),
  timeIssued: DS.attr()
});
