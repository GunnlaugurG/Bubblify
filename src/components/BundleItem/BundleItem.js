import React from 'react';
import {Link} from 'react-router-dom';

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

export default BundleItem;

