import React from 'react';
import BundleItem from '../BundleItem/BundleItem'
//import { getBundles } from '../../../server/services/bubbleService';
import axios from 'axios';


export default class Bundle extends React.Component {
    constructor(){
        super();
        this.state = {
            bundle: []
        }
    }

    componentDidMount(){

        axios.get('http://localhost:3500/api/bundles')
        .then(res => {
            this.setState({bundle: res.data});
        })

// --------------------- OLD -----------------------------------
//      var allBundles = getBundles();
//      this.setState(
//          {bundle: allBundles}
//      )
// -------------------------------------------------------------
    }
  
    render() {
        const { bundle } = this.state;
        return (
            bundle.map(b => <BundleItem key={b.id} {...b} />)            
        )
    }
}