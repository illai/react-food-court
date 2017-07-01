import React, { Component } from 'react';
import RestaurantCard from '../restaurant-card/restaurant-card';
import '../../App.css';

class RestaurantsList extends Component {

    render() {
    
        const restaurants = this.props.restaurants;
        const restaurantsList = [];

        restaurants.forEach((restaurant) => {
            const hasHebTitle = restaurant.title.he_IL;

            if(restaurant.title && hasHebTitle) {
                if (hasHebTitle.indexOf(this.props.filterText) === -1) {
                    return;
                }
            }
        
            restaurantsList.push(<RestaurantCard restaurant={restaurant} key={restaurant.id} />);
        });

        return (
            <div className="restaurans-list">
                {restaurantsList}
            </div>
        );
  }

}

export default RestaurantsList;