import React from 'react';
import { Link } from 'react-router-dom'
import ConfirmationListItem from '../ConfirmationListItem/ConfirmationListItem';
import { PropTypes } from 'prop-types';

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
                        <h1>Items</h1>
                        {items.map(b => (
                            <ConfirmationListItem key={b.id} {...b} />
                            //<Link to={ "/bubbles/" + item.id}> <p>{item.name}</p> </Link>
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
                        <h1>Items</h1>
                        {items.map(b => (
                            <ConfirmationListItem key={b.id} {...b} />
                           //<Link to={ "/bubbles/" + item.id}> <p>{item.name}</p> </Link>
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

OrderList.propTypes = {
    order: PropTypes.shape({
        // THE ITEMS IN THE OREDER
        items: PropTypes.array.isRequired,
        // INFORMATION ABOUT THE ON WHO ORDERED
        // BUYERS ADDRESS
        address: PropTypes.string,
        // BUYERS CITY
        city: PropTypes.string,
        // BUYERS NAME
        name: PropTypes.string,
        // BUYERS  POSTAL
        postal: PropTypes.string,
        // BUYERS PHONE NUMBER
        telephone: PropTypes.string,
    })
}

export default OrderList;
