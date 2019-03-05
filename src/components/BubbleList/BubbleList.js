import React from 'react'
import BubbleItem from '../BubbleItem/BubbleItem';
import Services from '../../services/bubbleService'

export default class BubbleList extends React.Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
        //this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount(){
        Services.getProducts().then(b => this.setState({products: b}));
    }

    render() {
        const { products } = this.state;
            return (
                    products.map(b => <BubbleItem key={b.id} {...b}/>)
        )
    };
};

