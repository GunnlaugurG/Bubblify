import React from 'react';
import { Link } from 'react-router-dom';

class BubbleItem extends React.Component{
    constructor(){
        super();
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(){
        localStorage.setItem('item' + this.props.id, this.props.id);
    }

    render(){
        return (
            <li className="">
                <div className="card">
                    <Link to={ "/bubbles/" + this.props.id }><img className=" bubbleImg" src={this.props.image} alt="Card image cap"/></Link>
                    <div className="card-body">
                    <Link to={ "/bubbles/" + this.props.id }><h3 className="card-title">{this.props.name}</h3></Link>
                        <h5 className="">{this.props.price} $</h5>
                        <i className="fas fa-cart-plus add-cart" onClick={this.addToCart}></i>
                    </div>
                </div>
            </li>
        )
    }
}

export default BubbleItem;