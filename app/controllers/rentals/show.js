import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	    submitComment: function(){
	  		var model = this.get('model');
	  		var id = model.id;
	  		let rental = this.get('store').peekRecord('rental', id);
	  		// console.log(rental);
	  		let message = this.get('message');
	  		var randomId = Math.random().toString(36).substr(2, 9);
			let comment = this.get('store').createRecord('comment', {
				id: randomId,
			  	rental: rental,
			  	message: message
			});
			// console.log(this.get('store').peekAll('rental',{include: 'comments'}));
			this.set('message','');
			//comment.save(); //cannot do this because we dont have "POST" method avialable as this is a faky
	  	}
	}
});
