import React from 'react';
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';

class CartListItem extends React.Component{
    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount(){
        console.log(this.props.name);
    }

    removeItem(){
        localStorage.removeItem("item" + this.props.id);
    }

    render(){
        return(
            <li>
                <div className="card">
                    <Link to={ "/bubbles/" + this.props.id }><img className=" bubbleImg" src={this.props.image} alt="Card image cap"/></Link>
                    <div className="card-body">
                    <Link to={ "/bubbles/" + this.props.id }><h3 className="card-title">{this.props.name}</h3></Link>
                        <h5 className="">{this.props.name} $</h5>
                        <i className="fas fa-trash-alt add-cart" onClick={this.removeItem}></i>
                    </div>
                </div>
            </li>
        )
    }
}

export default CartListItem;