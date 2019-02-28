import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutContainer extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Link to={"/checkout/deliver"} className="btn btn-primary">Deliver</Link>
                <Link to={"/checkout"} className="btn btn-primary">Pick up</Link>
            </div>
        )
    }
}

export default CheckoutContainer;