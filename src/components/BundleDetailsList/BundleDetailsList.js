import React from 'react';
import BundleDetails from '../BundleDetails/BundleDetails'
import Services from '../../../server/services/bubbleService'

class BundleDetailsList extends React.Component{
    componentDidMount(){
        var bundleItem = Services.getBundles().find((item) => item.id == this.props.match.params.bundleId);
        this.setState({bundleName: bundleItem.name});
    }
    constructor(){
        super();
        this.state = {
            bundleName: '',
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