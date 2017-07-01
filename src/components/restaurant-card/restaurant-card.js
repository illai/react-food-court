import React, { Component } from 'react';

import './restaurant-card.css'

import defaultImage from '../../media/default.png';

class RestaurantCard extends Component {
  render() {
    
    return (
        <div className={"fc-restaurant-card"}>

          <div className="fc-logo-bg-card">
            <div className="fc-logo-wrapper-card">
                <img src={defaultImage} />
            </div>
          </div>

          <h3 className="fc-restaurant-name-card">Restaurant Name</h3>
          <p className="fc-restaurant-address-card">Restaurant Address</p>

          <div className="fc-modal-button" 
               onClick={alert('Restaurant Card Clicked')}></div>

        </div>
    );

  }
}

export default RestaurantCard;