import React from 'react'
import BubbleItem from '../BubbleItem/BubbleItem';
import { getProducts } from '../../../server/services/bubbleService'

export default class BubbleList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        var allProducts = getProducts();
        this.setState({
            products: allProducts
        })
    }

    addToCart(id){
        console.log("HELLO");
        localStorage.setItem('item' + id, id);
        console.log(localStorage);
    }


    render() {
        const { products } = this.state;
            return (
                    products.map(b => <BubbleItem key={b.id} {...b}/>)
        )
    };
};

