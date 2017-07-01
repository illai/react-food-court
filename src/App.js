import React, { Component } from 'react';

// Importing Components
import FilteringArea from './components/filtering-area/filtering-area';
import RestaurantsList from './components/restaurants-list/restaurants-list';

import './App.css';

class App extends Component {

    render() {

		return (
			<div id="fc">
				<FilteringArea />
				<RestaurantsList />
			</div>
		);
	}
}

export default App;
