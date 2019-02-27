import React from 'react';

const BubbleItem = ({name, description, price, image }) =>{

        return (
                <li className="">
                    <div className="card">
                        <img className=" bubbleImg" src={image} alt="Card image cap"/>
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{description}</p>
                            <h5 className="">{price} $</h5>
                        </div>
                    </div>
                </li>
        )
}

export default BubbleItem;