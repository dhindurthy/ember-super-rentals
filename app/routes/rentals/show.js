export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('rental', params.rentalyo_id);
  }
});