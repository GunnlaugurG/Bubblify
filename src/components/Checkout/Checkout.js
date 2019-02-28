import React from 'react'
import CheckoutContainer from '../CheckoutContainer/CheckoutContainer'


class Checkout extends React.Component {
  render() {
    return (
      <div className='bubble-container'>
          <h1>Checkout</h1>
            <CheckoutContainer />
      </div>
    )
  }
}

export default Checkout;
