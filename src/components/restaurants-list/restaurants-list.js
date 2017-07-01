import React, { Component } from 'react';

import RestaurantCard from '../restaurant-card/restaurant-card';

import './restaurants-list.css';

class RestaurantsList extends Component {
  render() {
    
    return (
        <div className="restaurans-list">
            <RestaurantCard />
        </div>
    );

  }
}

export default RestaurantsList;