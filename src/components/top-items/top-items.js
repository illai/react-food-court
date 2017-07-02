import React, { Component } from 'react';
import SingleItem from '../single-item/single-item';
import '../../App.css';

class TopItems extends Component {
  render() {
    var itemsList = this.props.items;
    var topItems = [];

    itemsList.forEach((item) => {
        topItems.push(<SingleItem item={item} key={item.id} />);
    });

    return (
        <div className="fc-top-items-wrapper">
            <div className="fc-top-items-title">
                מנות מומלצות
            </div>
            <div className="fc-inner-items-wrapper">
                {topItems}
            </div>
        </div>
    );
  }
}
export default TopItems;