import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  // host: 'https://api.example.com'
  /**
   * if you did not want to pluralize model 
   * names and needed underscore_case instead of 
   * camelCase you could override the pathForType 
   * method like this; Requests for person would 
   * now target /person/1. Requests for user-profile 
   * would now target /user_profile/1
   */
  // pathForType: function(type) {
  //   return Ember.String.underscore(type);
  // }
});
