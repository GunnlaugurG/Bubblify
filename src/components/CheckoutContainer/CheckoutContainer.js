import React from 'react';
import { Link } from 'react-router-dom';
import AddressForm from '../AddressForm/AddressForm';
import PickupForm from '../PickupForm/PickupForm';
import Confirmation from '../Confirmation/Confirmation';
import Complete from '../Complete/Compete';
import {ProgressBar} from 'react-bootstrap'

class CheckoutContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            deliver: false,
            pickup: false,
            addressValidated: false,
            orderComplete: false,
            address: {}
        }
        this.changeToDeliver = this.changeToDeliver.bind(this);
        this.changeToPick = this.changeToPick.bind(this);
        this.changeValidated = this.changeValidated.bind(this);
        this.completeOrder = this.completeOrder.bind(this);
    }
    completeOrder(){
        this.setState({
            deliver: false,
            pickup: false,
            addressValidated: false,
            orderComplete: true,
        })
    }

    changeToDeliver(){
        this.setState ({
            deliver: true,
            pickup: false
        })
    }

    changeToPick(){
        this.setState({
            deliver: false,
            pickup: true
        })
    }

    changeValidated(formAddress){
        this.setState({
            deliver: false, 
            pickup: false, 
            addressValidated: true,
            address: formAddress
        })
    }

    

    render(){
        const submittedAddress = this.state.address;
        return (
                this.state.orderComplete?
                    <Complete />
                :
                <div>
                    {
                        !this.state.addressValidated?
                        <div>
                        <ProgressBar now={33} label="Shipping" variant="success"/>
                            <button className="btn btn-primary selectDel" onClick={this.changeToDeliver} >Deliver</button>
                            <button className="btn btn-primary selectPic" onClick={this.changeToPick} >Pickup</button>
                        </div>
                        :
                        <div>
                            <Confirmation address={submittedAddress} complete={this.completeOrder}/>
                        </div>
                    }
                    {
                        this.state.deliver?
                        <AddressForm changeVal={this.changeValidated}/>
                    :
                    <></>

                    }
                    {
                        this.state.pickup?
                        <PickupForm changeVal={this.changeValidated}/>
                        :
                        <></>
                    }
                </div>
        )
    }
}

export default CheckoutContainer;