import React, { Component } from 'react';
import LoadingScreen from './components/loading-screen/loading-screen';
import FilteringArea from './components/filtering-area/filtering-area';
import RestaurantsList from './components/restaurants-list/restaurants-list';
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

	componentDidMount() {

		fetch('https://spice-prod.appspot.com/v1.1', {
			method: 'post', 
			headers: {
			"Content-Type": "application/json"
			}, 
			body: JSON.stringify({
				type: 'search', 
				filter: {
				distributorId: 'food.co.il'
				} 
			})  
		}).then( r => r.json() )
		.then( (allRestaurants)  => { this.setState({ allRestaurants }); })
		.catch( e => console.log(e) );
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}

    render() {

		if (!this.state.allRestaurants) {
    		return (
				<div id="fc">
					<LoadingScreen />
				</div>
			);
    	}

		const restaurantsList = this.state.allRestaurants.value.results;

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
