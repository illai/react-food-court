import React, { Component } from 'react';
import loader from '../../media/loader.svg';
import '../../App.css';

class LoadingScreen extends Component {
  render() {
    return (
        <div className="loading-screen">
            <div className="loading-screen-inner">
                <img src={loader} alt="spinner" />
                <h3>טוען את רשימת המסעדות...</h3>
            </div>
        </div>
    );
  }
}
export default LoadingScreen;