import Ember from 'ember';

export function getDuration(params) {
  var date = params[0];
  return moment(date).fromNow();
}

export default Ember.Helper.helper(getDuration);
