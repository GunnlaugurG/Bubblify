import React from 'react';
// import Services from '../../../server/services/bubbleService'
import BubbleItem from '../BubbleItem/BubbleItem';
import { PropTypes } from 'prop-types';
import axios from 'axios';

class BundleDetails extends React.Component{
    componentDidMount(){
        
        axios.get('http://localhost:3500/api/bundles/' + this.props.getNumberOfBundle)
        .then(bundle => {
            axios.get('http://localhost:3500/api/bubbles')
            .then(res => {
                var allProducts = bundle.data.items.map((b) => res.data.find((items) => items.id == b));
                this.setState({products: allProducts});
            })
        })

        
        // var bundleItem = Services.getBundles().find((item) => item.id == this.props.getNumberOfBundle); 
        // //this.setState({bundleName: bundleItem.name});
        // var allProducts = bundleItem.items.map((b) => Services.getProducts().find((items) =>  items.id == b ));
        // this.setState({products: allProducts});

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
    getNumberOfBundle: PropTypes.shape({
        bundleName: PropTypes.number.isRequired
    }).isRequired
};

export default BundleDetails;
