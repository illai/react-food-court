import React, { Component } from 'react';
import TopItems from '../top-items/top-items';
import defaultImage from '../../media/default.png';
import phone from '../../media/phone.svg';
import location from '../../media/location.svg';
import '../../App.css';

class RestaurantDetails extends Component {

  render() {
    const d = this.props.details;
    const name = d.title.he_IL;
    const street = d.address.street;
    const streetNum = d.address.number;
    const city = d.address.city;
    const address = street + ' ' + streetNum + ', ' + city;
    const pic = d.picture ? d.picture : defaultImage;
    const phoneNum = d.contact && d.contact.phone ?  <span className="num">{ d.contact.phone }</span> : 'אין מספר טלפון';
    const topItemsList = d.topItems;

    const topItems = topItemsList ? <TopItems items={topItemsList} /> : '';
        
    return (
        <div className="fc-restaurant-details">
            <div className="details-top">
                <div className="fc-logo-wrapper">
                    <img src={pic} alt={name} />
                </div>
                <div className="fc-details-wrapper">
                    <div className="fc-phone-num">
                        <span className="fc-icon"><img src={phone} alt="" /></span>&nbsp;&nbsp;
                        {phoneNum}
                    </div>
                    <div className="fc-address">
                        <span className="fc-icon"><img src={location} alt="" /></span>&nbsp;&nbsp;
                        {address}
                    </div>
                </div>
            </div>
            {topItems}
        </div>
    );
  }
}
export default RestaurantDetails;