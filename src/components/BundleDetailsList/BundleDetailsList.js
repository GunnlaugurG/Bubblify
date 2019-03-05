import React from 'react';
import BundleDetails from '../BundleDetails/BundleDetails'
import Services from '../../services/bubbleService';


class BundleDetailsList extends React.Component{
    componentDidMount(){

        var bundleId = this.props.match.params.bundleId;
        Services.getSingleBundle(bundleId)
        .then(res => {
            this.setState({bundleName: res.name});
        })

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