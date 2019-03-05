import React from 'react'
import CartContainer from '../CartContainer/CartContainer'

const Cart = () => {
        var number = localStorage.getItem('number');
        number = (number) ? number.slice(0, 3) + "-" + number.slice(3, 6) + "-" + number.slice(6) : "";
        return (
            <div className="bubble-container">
                <h1>Cart</h1>
                <h3>Phone number: {number}</h3>
                <CartContainer />
            </div>
        )
}   

export default Cart;