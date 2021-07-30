import React, { Component } from 'react';

class Item extends Component {

    render() {
        let { item,onAddToCart } = this.props; // item = this.props.item
        return (
            <div className="col-md-2 text-center item">
                <img alt="img" className="img-fluid" src={ item.thumb } />
                <div className="item-detail">
                    <p className="m-0">{ item.name } </p>
                    <p className="m-0">{ item.price } VND</p>
                    <button className="btn btn-primary btn-sm mt-2"  onClick={ (id) => onAddToCart(item.id)}>
                        <i className="fa fa-plus mr-2" />Thêm vào giỏ
                    </button>
                </div>
            </div>
        );
    }
}

export default Item;
