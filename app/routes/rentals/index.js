import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	console.log(this.get('store').findAll('rental',{include: 'comments'}));
    	return this.get('store').findAll('rental',{include: 'comments'});
	}
});
