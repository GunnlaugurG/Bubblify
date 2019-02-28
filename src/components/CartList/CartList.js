import React from 'react';
import Services from '../../../server/services/bubbleService';
import CartListItem from '../CartListItem/CartListItem';



class CartList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [{}],
        }
    }
    componentDidMount(){
        var keys = Object.keys(localStorage);
        var items = [];
        
        if(keys.length > 1){
            for(var i = 0 ; i < keys.length -1 ; i++){
                items.push(JSON.parse(localStorage.getItem(keys[i])))
            }
        }
        var allProducts = items.map((b) => Services.getProducts().find((items) =>  items.id == b ));
        this.setState({products: allProducts});
    }



    render(){
        const { products } = this.state;
        return(
            products.map(b => <CartListItem key={b} {...b} />)
        )
    }
}

export default CartList;