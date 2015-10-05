import Ember from 'ember';

export function formatDate() {
  return moment().format('lll');
}

export default Ember.Helper.helper(formatDate);
