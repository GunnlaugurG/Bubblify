import React from 'react';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';

class CartContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(productsList){
        this.setState({products: productsList});
    }
    
    
    render(){
        const { products } = this.state;
        let checkout;

        if(this.state.products.length === 0){
            checkout = <Link to={ '/checkout'}> <button className="btn btn-success " disabled > Checkout</button> </Link>
        }
        else{
            checkout = <Link to={ '/checkout'}> <button className="btn btn-success " > Checkout</button> </Link>
        }
        return (
            <div> 
                <div>
                    {checkout}
                </div>
                <ul>
                    <CartList updateState={this.updateState.bind(this)}/>
                </ul>
            </div>
        )
    }
}
            
export default CartContainer;
            