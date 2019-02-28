import React from 'react';
import { getProducts } from '../../../server/services/bubbleService'

class BubbleDetails extends React.Component{
    componentDidMount(){

        var bubbleItem = getProducts().find((item) => item.id == this.props.match.params.bubbleId)
        this.setState({bubble: bubbleItem});
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
        console.log(localStorage);
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