import React from 'react';
import { Link } from 'react-router-dom'

const OrderList = (props) => {
    const {address, telephone, name, city, postal, items} = props.order;
    var singleOrder;
    if (!address) {
        singleOrder = (
            <li>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <p>Phone: {telephone}</p>
                        <hr/>
                        <h1>Items</h1>
                        {items.map(item => (
                            <Link to={ "/bubbles/" + item.id}> <p>{item.name}</p> </Link>
                        ))}
                    </div>
                </div>
            </li>
        )
    } else {
        singleOrder = (
            <li>
                <div className="card cardLeft">
                    <div className="card-body">
                        <h3 className="card-title">Name: {name}</h3>
                        <p>Phone: {telephone}</p>
                        <p>Address: {address} </p>
                        <p>City: {city} </p>
                        <p>Postal: {postal} </p>
                        <hr/>
                        <h1>Items</h1>
                        {items.map(item => (
                           <Link to={ "/bubbles/" + item.id}> <p>{item.name}</p> </Link>
                        ))}
                    </div>
                </div>
            </li>
        )
    }

    return (
        <>
            {singleOrder}

        </>

    )
}

export default OrderList;
