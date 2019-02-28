import React from 'react'
import CartContainer from '../CartContainer/CartContainer'

class Cart extends React.Component {
    render(){
        return (
            <div className="bubble-container">
                <h1>Cart</h1>
                <CartContainer />
            </div>
        )
    }
}   

export default Cart;