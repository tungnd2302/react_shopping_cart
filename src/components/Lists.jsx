import React, { Component } from 'react';
import Item from './Item';

class Lists extends Component {

    render() {
        let { onAddToCart,items } = this.props;
        let itemsRender = items.map((value,index) => (
            <Item item={ value } key={index} onAddToCart = { (item) => onAddToCart(item) }/>
        ))
        // console.log("items => ",items);
        return (
            <div className="row mt-2">  
                { itemsRender }
            </div>
        );
    }
}

export default Lists;
