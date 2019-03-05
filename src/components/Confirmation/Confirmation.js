import React from 'react';
import CartListItem from '../ConfirmationListItem/ConfirmationListItem'
import ConfirmationListItem from '../ConfirmationListItem/ConfirmationListItem';
import Services from '../../services/bubbleService'
import toastr from 'toastr';
import { ProgressBar} from 'react-bootstrap';



class Confirmation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            items: [{}]
        }
        this.updateState();
        this.sendOrder = this.sendOrder.bind(this);
        this.updateState = this.updateState.bind(this);
        console.log(this.props);
    }

    updateState(){
        var keys = Object.keys(localStorage);
        var items = [];
        if(keys.length > 1){
            for(var i = 0 ; i < keys.length -1 ; i++){
                var key = keys[i]
                if(key.match('item')){
                    items.push(JSON.parse(localStorage.getItem(key)))
                }
            }
        }
        var allProducts

        Services.getProducts()
        .then(res => {
            allProducts = items.map((b) => res.find((items) => items.id == b));
            this.setState({
                items: allProducts,
                fields: this.props.address
            });
        })
    }
    
    componentDidMount(){
        this.updateState()
    }
    sendOrder(){
        let that = this;
        console.log("SENT");
        console.log(this.state);
        console.log(this.state.fields.telephone)
        toastr.success('Order complete!!', 'Success!');
        Services.postOrder(this.state.fields, this.state.items)
        .then(function (response) {
            if(response === 200){
                console.log(response)
                var keys = Object.keys(localStorage);
                var items = [];
                if(keys.length > 1){
                    for(var i = 0 ; i < keys.length -1 ; i++){
                        var key = keys[i]
                        if(key.match('item')){
                            localStorage.removeItem(key)
                        }
                    }
                }
            }
            else{
                console.log('OOPS somthing went wrong');
            }
        })
        .then(() =>{
            that.props.complete();
            }
        )
    }


    render(){
        var { name, address, telephone, city, postal} =  this.props.address;
        telephone = telephone.slice(0, 3) + "-" + telephone.slice(3, 6) + "-" + telephone.slice(6);
        const { items } = this.state;
        return(
            <div>
                <div className="confirm-addrss">
                    <ProgressBar now={66} label="Confirm" variant="success"/>
                    <br/>
                    <p>Name: {name}</p>
                    <p>Telephone: {telephone}</p>
                    {
                        address?
                        <div>
                            <p>Address: {address}</p>
                            <p>City: {city}</p>
                            <p>Postal: {postal}</p>
                        </div>
                        :
                        <></>
                    }
                </div>
                <div>
                    <button className="btn btn-success" onClick={this.sendOrder}>Confirm order</button>
                </div>
                <h1>Items in order</h1>
                <ul>
                    {items.map(b => <ConfirmationListItem key={b.id} {...b} />)}
                </ul>
            </div>
        )
    }

}

export default Confirmation;