import React, { Component } from 'react';
import defaultImage from '../../media/default.png';
import '../../App.css';

class SingleItem extends Component {
  render() {
    var item = this.props.item;

    var name = item.title.he_IL;
    var price = !isNaN(item.price / 100) ? (item.price / 100) + 'ש"ח ' : item.price;
    var pic = item.picture ? item.picture : defaultImage;

    return (
        <div className="fc-menu-item-wrapper">
            <div className="fc-menu-item-image">
                <img src={pic}  alt={name} />
            </div>
            <div className="fc-item-name">{name}</div>
            <div className="fc-item-price">{price}</div>
        </div>
    );
  }
}
export default SingleItem;