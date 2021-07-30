import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

class CartDropdown extends Component {
    render() {
        let { items,onSetQuantity } = this.props;
        let itemsRender = items.map((value,index) => {
            if(value.qty && value.qty > 0) {
                return <CartItem key={index} item={value} onSetQuantity = { (item) => onSetQuantity(item) } />;
            }
        })

        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-shopping-cart" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ top: '0px', left: '-240px', width: '400px', padding: '0px 10px' }}>
                    <p className="text-center">Danh sách giỏ hàng</p>
                    <table className="table table-bordered">
                        <tbody><tr>
                            <td>Tên sản phẩm</td>
                            <td>Số lượng</td>
                            <td>Thành tiền</td>
                        </tr>
                            { itemsRender }
                            <CartTotal />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartDropdown;
