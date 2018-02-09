// import ApplicationAdapter from './application';

// export default ApplicationAdapter.extend({
// });

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});