import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

const BundleItem = ({id, name, items}) => {

    const itemsLength = items.length;
    return (
        <li>
            <div className="card">
                <Link to={ "/bundle/" + id}>
                    <div className="card-body">
                    <h3 className="card-title d-flex justify-content-center"> {name}</h3>
                    <h4 className="d-flex justify-content-center">{itemsLength} products in bundle</h4>
                    </div>
                </Link>
            </div>
        </li>
    )
}

BundleItem.propTypes = {
    // THE ID OF THE BUNDLE
    id: PropTypes.number.isRequired,
    // THE NAMA OF THE BUNDLE
    name: PropTypes.string.isRequired,
    // THE ITESM OF THE BUNDLE
    items: PropTypes.array.isRequired,
}

export default BundleItem;

