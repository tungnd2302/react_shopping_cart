import React, { Component } from 'react';
import CartDropdown from './CartDropdown';

class Header extends Component {
    render() {
        let { items,onSetQuantity } = this.props;
        return (
            <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-between">
                    <h3>Shopping Cart</h3>
                    <CartDropdown items = { items } onSetQuantity = { (item) => onSetQuantity(item) } />
                </div>
            </div>
        );
    }
}

export default Header;
