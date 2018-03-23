import DS from 'ember-data';

export default DS.Model.extend({
	message: DS.attr(),
	rental: DS.belongsTo('rental')
});
