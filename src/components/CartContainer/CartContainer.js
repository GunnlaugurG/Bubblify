import React from 'react';
import CartList from '../CartList/CartList';

class CartContainer extends React.Component {
    constructor(){
        super();
        this.clearCart = this.clearCart.bind(this);
    }
    clearCart(){
        console.log(localStorage);
        localStorage.clear();
        console.log(localStorage);
    }

    render(){
        return (
            <div> 
                <ul>
                    <CartList />
                </ul>
                <div>
                    <button className="btn btn-danger" onClick={this.clearCart}>Clear Cart</button>
                </div>
            </div>
        )
    }
}

export default CartContainer;