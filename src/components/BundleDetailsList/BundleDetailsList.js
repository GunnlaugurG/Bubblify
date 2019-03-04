import React from 'react';
import BundleDetails from '../BundleDetails/BundleDetails'
import axios from 'axios';


class BundleDetailsList extends React.Component{
    componentDidMount(){

        axios.get('http://localhost:3500/api/bundles/' + this.props.match.params.bundleId)
        .then(res => {
            this.setState({bundleName: res.data.name});
        })

        // var bundleItem = Services.getBundles().find((item) => item.id == this.props.match.params.bundleId);
        // this.setState({bundleName: bundleItem.name});
    }
    constructor(){
        super();
        this.state = {
            bundleName: '',
            bubbles: [{}]
        }
    }
    render(){

        return (
            <div className="bubble-container">
            <h1>{this.state.bundleName}</h1>
                <ul>
                    <BundleDetails getNumberOfBundle={this.props.match.params.bundleId}/> 
                </ul>
            </div>
        )
    }
}


export default BundleDetailsList;