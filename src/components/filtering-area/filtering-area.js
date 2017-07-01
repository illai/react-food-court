import React, { Component } from 'react';

import './filtering-area.css';

class FilteringArea extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    render() {
        return (
            <div className="fc-header">
                <div className="fc-title">אז מה אוכלים...?</div>
                <form className="fc-filtering-area">
                    <input 
                        type="text"
                        className="fc-input-field"
                        placeholder="הקלד\י שם מסעדה"
                        value={this.props.filterText}
                        onChange={this.handleFilterTextInputChange} />
                </form>

            </div>
        );
    }

}

export default FilteringArea;