import React from 'react';
import BundleItem from '../BundleItem/BundleItem'
import { getBundles } from '../../../server/services/bubbleService';



export default class Bundle extends React.Component {
    constructor(){
        super();
        this.state = {
            bundle: []
        }
    }

    componentDidMount(){
        var allBundles = getBundles();
        this.setState(
            {bundle: allBundles}
        )
    }
  
    render() {
        const { bundle } = this.state;
        return (
            bundle.map(b => <BundleItem key={b.id} {...b} />)            
        )
    }
}