/**
 * StorePicker	
 * This will let us make <StorePicker/>
 */

import React from 'react';
import { Navigation, History } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
	mixins: [History],
	goToStore: function(event){
		// Stop the form from submitting
		event.preventDefault();
		// get the data from the input
		var storeId = this.refs.storeId.value;
		// Update the history state
		this.history.pushState(null, '/store/' + storeId);
	},
	render: function() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
				<input type="submit"/>
			</form>
		)
	}
});

export default StorePicker;