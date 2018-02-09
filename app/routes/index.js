// import Ember from 'ember';

// export default Ember.Route.extend({
// });

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.replaceWith('rentals');
  }
});