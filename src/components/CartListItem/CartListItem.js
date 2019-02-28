import React from 'react';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';

class CartListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            name: "",
            image: "",
            price: null
        }
        this.removeItem = this.removeItem.bind(this);
    }
    componentDidMount(){
        this.setState({
            id: this.props.id,
            name: this.props.name,
            image: this.props.image,
            price: this.props.price
        })

    }

    removeItem(){
        localStorage.removeItem("item" + this.props.id);
        this.props.updateCart;
        this.props.updateCart();
    }


    render(){

        return(
            <li>
                <div className="card">
                    <Link to={ "/bubbles/" + this.state.id }><img className=" bubbleImg" src={this.state.image} alt="Card image cap"/></Link>
                    <div className="card-body">
                    <Link to={ "/bubbles/" + this.state.id }><h3 className="card-title">{this.state.name}</h3></Link>
                        <h5 className="">{this.state.price} $</h5>
                        <i className="fas fa-trash-alt remove-cart" onClick={this.removeItem}></i>
                    </div>
                </div>
            </li>
        )
    }
}



export default CartListItem;