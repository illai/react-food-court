import React from 'react';
import { Modal } from 'react-bootstrap';
import defaultImage from '../../media/default.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

/*
## Note that React.createClass is depricated 
## but this is what made Bootstrap Modal runing
*/
const RestaurantCard = React.createClass({
    
    getInitialState() {
        return { showModal: false };
    },
    close() {
        this.setState({ showModal: false });
    },
    open() {
        this.setState({ showModal: true });
    },
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
                    onClick={this.open}></div>



                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Hello Modal
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
});

export default RestaurantCard;