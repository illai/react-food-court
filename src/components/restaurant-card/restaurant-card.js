import React, { Component } from 'react';
import defaultImage from '../../media/default.png';
import '../../App.css';

class RestaurantCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
      alert('Restaurant Card Clicked');
  }

  render() {

    const restaurant = this.props.restaurant;

    const id = restaurant.id;
    const name = restaurant.title.he_IL;
    const street = restaurant.address.street;
    const streetNum = restaurant.address.number;
    const city = restaurant.address.city;
    const address = street + ' ' + streetNum + ', ' + city;
    const pic = restaurant.picture ? restaurant.picture : defaultImage;
    
    return (
        <div className={"fc-restaurant-card"}>

          <div className="fc-logo-bg-card">
            <div className="fc-logo-wrapper-card">
                <img src={pic} alt={id + ' Logo'} />
            </div>
          </div>

          <h3 className="fc-restaurant-name-card">{name}</h3>
          <p className="fc-restaurant-address-card">{address}</p>

          <div className="fc-modal-button" 
               onClick={this.buttonClicked}></div>

        </div>
    );

  }
}

export default RestaurantCard;