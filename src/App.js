import React, { Component } from 'react';

// Importing Components
import FilteringArea from './components/filtering-area/filtering-area';
import RestaurantsList from './components/restaurants-list/restaurants-list';

import Data from './data.json';

import './App.css';

class App extends Component {
	constructor(props, context) {
    	super(props, context);
    	this.state = {
    		restaurantsList: null,
    		filterText: ''
    	};

    	this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}

    render() {

		const restaurantsList = Data.value.results;
console.log(restaurantsList)
		return (
			<div id="fc">

				<FilteringArea 
					filterText={this.state.filterText} 
            		onFilterTextInput={this.handleFilterTextInput} />

				<RestaurantsList
					restaurants={restaurantsList} 
          			filterText={this.state.filterText} />

			</div>
		);
	}
}

export default App;
