import React from 'react'
import BubbleItem from '../BubbleItem/BubbleItem';
//import { getProducts } from '../../../server/services/bubbleService'
import Services from '../../services/bubbleService'
import axios from 'axios';

export default class BubbleList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        //this.addToCart = this.addToCart.bind(this);
    }
    componentDidUpdate(){
    }

    componentDidMount(){
        axios.get('http://localhost:3500/api/bubbles')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })


        // var allProducts = getProducts();
        // console.log(allProducts);
        // this.setState({
        //     products: allProducts
        // })
    }

    // addToCart(id){
    //     console.log("HELLO");
    //     localStorage.setItem('item' + id, id);
    //     console.log(localStorage);
    // }


    render() {
        const { products } = this.state;
            return (
                    products.map(b => <BubbleItem key={b.id} {...b}/>)
        )
    };
};

