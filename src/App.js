import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import Title from './components/Title';

class App extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            items : [
                { id : 1, name : 'Dâu', price: 8000, thumb: 'assets/photos/001.jpeg' },
                { id : 2, name : 'Chuối', price: 3000, thumb: 'assets/photos/002.jpeg' },
                { id : 3, name : 'Dứa', price: 1000, thumb: 'assets/photos/003.jpeg' },
                { id : 4, name : 'Cam', price: 5000, thumb: 'assets/photos/004.jpeg' },
                { id : 5, name : 'Đu đủ', price: 10000, thumb: 'assets/photos/005.jpeg' },
                { id : 6, name : 'Cherry', price: 7000, thumb: 'assets/photos/006.jpeg' }
            ]
        }
    }

    // id 
    // create, update

    handleAddToCart = (id) => {
        this.state.items.forEach((item) => {
            if(id == item.id) {
                if(!item['qty']) {
                    item['qty'] = 1;
                    return;
                }
                item['qty'] = item['qty'] + 1;
            }
        })
        this.setState({
            items : this.state.items
        })
    }

    // item : {id: ...., qty : ...}
    handleSetQuantity = (cart) => {
        this.state.items.forEach((item) => {
            if(cart.id == item.id) {
                item.qty = cart.qty
            }
        })
        this.setState({
            items : this.state.items
        })
    }



    render() {
        return (
            <div className="container">
                <Header 
                    items = { this.state.items } 
                    onSetQuantity = { (item) => this.handleSetQuantity(item) }
                />
                <Title />
                <Lists items = { this.state.items } onAddToCart = { (item) => this.handleAddToCart(item) } />
            </div>
        );
    }
}

export default App;
