import React from 'react';

class OrderList extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount(){
       console.log(this.props.order.name)

    }


    render(){

        return(
            <li>
                <h1>{this.props.order.name}</h1>

            </li>
        )
    }

}

export default OrderList;
