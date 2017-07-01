import React, { Component } from 'react';

import './filtering-area.css';

class FilteringArea extends Component {

    render() {
        return (
            <div className="fc-header">
                <div className="fc-title">אז מה אוכלים...?</div>
                <form className="fc-filtering-area">
                    <input 
                        type="text"
                        className="fc-input-field"
                        placeholder="הקלד\י שם מסעדה" />
                </form>

            </div>
        );
    }

}

export default FilteringArea;