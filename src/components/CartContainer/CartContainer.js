import React from 'react';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';

class CartContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        this.clearCart = this.clearCart.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(productsList){
        this.setState({products: productsList});
    }

    
    clearCart(){
        var keys = Object.keys(localStorage);
        var items = [];
        if(keys.length > 1){
            for(var i = 0 ; i < keys.length -1 ; i++){
                var key = keys[i]
                if(key.match('item')){
                    localStorage.removeItem(key)
                }
            }
        }
        this.setState({
            products: []
        })
         location.reload();
    }
    
    
    render(){
        const { products } = this.state;
        let checkout, remove;

        if(this.state.products.length === 0){
            checkout = <Link to={ '/checkout'}> <button className="btn btn-success " disabled > Checkout</button> </Link>
            remove = <button className="btn btn-danger" onClick={this.clearCart} disabled>Clear Cart</button>
        }
        else{
            checkout = <Link to={ '/checkout'}> <button className="btn btn-success " > Checkout</button> </Link>
            remove = <button className="btn btn-danger" onClick={this.clearCart}>Clear Cart</button>
        }
        return (
            <div> 
                <ul>
                    <CartList updateState={this.updateState.bind(this)}/>
                </ul>
                <div>
                    {checkout}
                    {remove}
                </div>
            </div>
        )
    }
}
            
export default CartContainer;
            