import React from 'react';
import { Link } from 'react-router-dom';

const BubbleItem = ({name, description, price, image, id }) =>{

        return (
                <li className="">
                    <div className="card">
                        <Link to={ "/bubbles/" + id }><img className=" bubbleImg" src={image} alt="Card image cap"/></Link>
                        <div className="card-body">
                        <Link to={ "/bubbles/" + id }><h3 className="card-title">{name}</h3></Link>
                            <h5 className="">{price} $</h5>
                        </div>
                    </div>
                </li>
        )
}

export default BubbleItem;