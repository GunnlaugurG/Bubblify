import React from 'react';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';

class CartContainer extends React.Component {
    constructor(){
        super();
        this.clearCart = this.clearCart.bind(this);
    }


    clearCart(){
        console.log(localStorage);
        localStorage.clear();
        console.log(localStorage);
        location.reload();
    }


    render(){
        return (
            <div> 
                <ul>
                    <CartList />
                </ul>
                <div>
                    <Link to={ '/checkout'}> <button className="btn btn-success"> Checkout</button> </Link>
                    <button className="btn btn-danger" onClick={this.clearCart}>Clear Cart</button>
                </div>
            </div>
        )
    }
}

export default CartContainer;