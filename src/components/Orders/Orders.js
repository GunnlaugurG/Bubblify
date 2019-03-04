import React from 'react';
import axios from 'axios';
import OrderList from '../OrderList/OrderList';


class Orders extends React.Component {
    constructor(){
        super();
        this.state = ({
            telephone: "",
            orders: [{}]
        })
    }

    componentDidMount(){
        var tele = localStorage.getItem('number');
        if(tele !== null){
            this.setState({
                telephone: tele
            })
            axios.get('http://localhost:3500/api/orders/' + tele)
            .then(res => {
                this.setState({
                    orders: res.data
                })
            })
        }
    }

    render(){
        const orders = this.state.orders;
        var  phone  = this.state.telephone;
        var list = [];
        if(phone != null){
            phone = phone.slice(0 ,3) + '-' + phone.slice(3,6) + '-' + phone.slice(6);
            // orders.map((b) => {list.push(<OrderList  order={b.items}  />)});
            for(var i = 0 ; i < orders.length; i++){
                list.push(<OrderList order={orders[i]}/>)
            }
        }else{
            list.push(<div> No phone number set</div>)
        }

        return (
            <div className="bubble-container">
                <h1>Order history</h1>
                <h3>Phone number: {phone}</h3>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default Orders;