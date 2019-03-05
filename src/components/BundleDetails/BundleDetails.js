import React from 'react';
// import Services from '../../../server/services/bubbleService'
import BubbleItem from '../BubbleItem/BubbleItem';
import { PropTypes } from 'prop-types';
import Services from '../../services/bubbleService';

class BundleDetails extends React.Component{
    componentDidMount(){
        const id = this.props.getNumberOfBundle;
        
        Services.getSingleBundle(id)
        .then((b) => {
            Services.getProducts()
            .then(res => {
                console.log(res);
                var allProducts = b.items.map((a) =>  res.find((item) => item.id == a));
                this.setState({
                    products: allProducts
                })
            })
        })
    }

    constructor(){
        super();
        this.state = {
            products: [{}],
            bundleName: ""
        }
    }



    render(){
        const { products } = this.state;
        return (
                products.map(b => <BubbleItem key={b.id} {...b} />)
        )
    }
}

BundleDetails.propTypes = {
    getNumberOfBundle: PropTypes.string.isRequired
};

export default BundleDetails;
