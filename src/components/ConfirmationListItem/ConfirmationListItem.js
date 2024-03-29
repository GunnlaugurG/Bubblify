import React from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';


class ConfirmationListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            name: "",
            image: "",
            price: null
        }
    }
    componentDidMount(){
        this.setState({
            id: this.props.id,
            name: this.props.name,
            image: this.props.image,
            price: this.props.price
        })

    }

    render(){
        return (
            <li>
            <div className="card">
            <Link to={ "/bubbles/" + this.state.id }><img className=" bubbleImg" src={this.state.image} alt="Card image cap"/></Link>
            <div className="card-body">
            <Link to={ "/bubbles/" + this.state.id }><h3 className="card-title">{this.state.name}</h3></Link>
                <h5 className="">{this.state.price} $</h5>
            </div>
        </div>
        </li>
        )
    }
}
ConfirmationListItem.propTypes = {
    // THE ITEM TO DISPLAY
    //ITEMS ID
    id: PropTypes.number.isRequired,
    //ITEMS NAME
    name: PropTypes.string.isRequired,
    //ITEMS IMAGE
    image: PropTypes.string.isRequired,
    //ITEMS DESRIPTION
    description: PropTypes.string.isRequired,
    //ITEMS PRICE
    price: PropTypes.number.isRequired,
}

export default ConfirmationListItem;