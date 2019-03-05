import React from 'react';
import Services from '../../services/bubbleService';
import CartListItem from '../CartListItem/CartListItem';

class CartList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [{}],
        }
        this.convertLocal = this.convertLocal.bind(this);
    }
    componentDidMount(){
        this.convertLocal();
    }



    convertLocal(){
        var keys = Object.keys(localStorage);
        var items = [];
        if(keys.length > 1){
            for(var i = 0 ; i < keys.length -1 ; i++){
                var key = keys[i]
                if(key.match('item')){
                    items.push(JSON.parse(localStorage.getItem(key)))
                }
            }
        }
        var allProducts
        Services.getProducts()
        .then(res => {
            console.log(res);
            allProducts = items.map((b) => res.find((items) => items.id == b));
            this.setState({products: allProducts});
            this.props.updateState(allProducts);
        })

    }



    render(){
        const { products } = this.state;
        if(products.length === 0){
            return (
                <div>
                    <h1> Nothing in cart</h1>
                </div>
            )
        }else{
            return(
                products.map(b => <CartListItem key={b.id} {...b} updateCart={this.convertLocal.bind(this)}/>)
            )
        }
    }
}

export default CartList;