import React from 'react';
import BundleItem from '../BundleItem/BundleItem'
import Service from '../../services/bubbleService';



export default class Bundle extends React.Component {
    constructor(){
        super();
        this.state = {
            bundle: []
        }
    }

    componentDidMount(){
        Service.getBundles().then(b => this.setState({bundle: b}));
    }
  
    render() {
        const { bundle } = this.state;
        return (
            bundle.map(b => <BundleItem key={b.id} {...b} />)            
        )
    }
}