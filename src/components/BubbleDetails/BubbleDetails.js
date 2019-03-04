import React from 'react';
//import { getProducts } from '../../../server/services/bubbleService';
import toastr from 'toastr';
import axios from 'axios';


class BubbleDetails extends React.Component{
    componentDidMount(){
        
        axios.get('http://localhost:3500/api/bubbles/' + this.props.match.params.bubbleId)
            .then(res => {
                this.setState({
                    bubble: res.data
                })
            })
        // var bubbleItem = data.find((item) => item.id == that.props.match.params.bubbleId)
        // that.setState({bubble: bubbleItem});
    }

    constructor(){
        super();
        this.state = {
            bubble: {}
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(){
        localStorage.setItem('item' + this.state.bubble.id, this.state.bubble.id);
        toastr.success('Item added to cart!', 'Success!');
    }



    render(){
        return (
            <div className="bubble-container">
                <div className="card bubble-details-card">
                    <h1 className="card-title">{this.state.bubble.name}</h1>
                    <img className=" bubbleImg" src={this.state.bubble.image} alt="Card image cap"/>
                    <h2 className="card-price">{this.state.bubble.price} $</h2>
                    <i className="fas fa-cart-plus add-cart" onClick={this.addToCart}></i>
                    <p className="card-text">{this.state.bubble.description}</p>
                </div>
            </div>
        )
    }
}

export default BubbleDetails;