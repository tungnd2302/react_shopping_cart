import React, { Component } from 'react';

class CartItem extends Component {

    incItem = (e,item) => {
        e.stopPropagation();
        const qty = item.qty + 1;
        this.props.onSetQuantity({
            id : item.id,
            qty : qty
        })
    }

    decsItem = (e,item) => {
        e.stopPropagation();
        if(item.qty > 0){
            const qty = item.qty - 1;
            this.props.onSetQuantity({
                id : item.id,
                qty : qty
            })
        }
    }

    render() {
        let { item,onSetQuantity } = this.props;
        // console.log(item)
        return (
            <tr>
                <td>
                    { item.name }
                </td>
                <td className="d-flex align-items-center justify-content-between">
                    <button className="btn btn-sm btn-secondary" onClick = { (e) => this.decsItem(e,item)}>
                        <i className="fa fa-minus" />
                    </button>
                    { item.qty }
                    <button className="btn btn-sm btn-default" onClick = { (e,) => this.incItem(e,item)}>
                        <i className="fa fa-plus" />
                    </button>
                </td>
                <td>
                    { item.price * item.qty }đ
                </td>
            </tr>
        );
    }
}

export default CartItem;
