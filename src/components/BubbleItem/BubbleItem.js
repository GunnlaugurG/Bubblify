import React from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import { PropTypes } from 'prop-types';

class BubbleItem extends React.Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(){
        localStorage.setItem('item' + this.props.id, this.props.id);
        toastr.success('Item added to cart!', 'Success!');
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
BubbleItem.propTypes = {
    //  The bubble provide as props
    //  BUBBLE ID
        id: PropTypes.number.isRequired,
        // BUBBLE IMAGE
        image: PropTypes.string.isRequired,
        // BUBBLE NAME
        name: PropTypes.string.isRequired,
        // BUBBLE DESCRIPTON
        description: PropTypes.string.isRequired,
        // BUBBLE PRICE
        price: PropTypes.number.isRequired
};
BubbleItem.defaultProps = {
    id: 404,
    image: "404",
    name: "404NotFound",
    description: "404NotFound",
    price: 404,
}


export default BubbleItem;