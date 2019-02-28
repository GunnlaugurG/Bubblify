import React from 'react';
import Services from '../../../server/services/bubbleService'
import BubbleItem from '../BubbleItem/BubbleItem';
import { PropTypes } from 'prop-types';

class BundleDetails extends React.Component{
    componentDidMount(){
        
        var bundleItem = Services.getBundles().find((item) => item.id == this.props.getNumberOfBundle);
        
        this.setState({bundleName: bundleItem.name});

        var allProducts = bundleItem.items.map((b) => Services.getProducts().find((items) =>  items.id == b ));
        
        this.setState({products: allProducts});

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
                products.map(b => <BubbleItem key={b} {...b} />)
        )
    }
}

BundleDetails.propTypes = {
    getNumberOfBundle: PropTypes.shape({
        bundleName: PropTypes.number.isRequired
    }).isRequired
};

export default BundleDetails;
