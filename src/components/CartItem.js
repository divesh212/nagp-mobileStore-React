import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../actions'
import '../style/CartItem.css'
const CartItem = (props) => {

    const [quantity, setItemQuantity] = useState(props.item.quantity);

    const removeItem = () => {
        props.removeFromCart(props.item.id);
    };

    const incrementQuantity = () => {
        setItemQuantity(quantity + 1);
        props.incrementQuantity(props.item.id);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setItemQuantity(quantity - 1);
            props.decrementQuantity(props.item.id);
        }
    }

    const handleChange = () => {}
    return (
        <div className="row align-items-center mb-3">

            <div className="text-md-left col-md-6">
                <h4 className="product-name"><strong>{props.item.name}</strong></h4>
                <h4>
                    <small className="product-description">{props.item.battery}</small>
                </h4>
            </div>
            <div className="col-md-4 row align-items-center">
                <div className="col-md-6" style={{ paddingTop: '5px' }}>
                    <h6><strong>Rs {props.item.price}/- <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-md-3">
                    <div className="quantity">
                        <input
                            onClick={incrementQuantity}
                            type="button" value="+" className="plus" />
                        <input
                            onChange={handleChange}
                            type="number" step="1" max="10" min="1" value={quantity} title="Qty"
                            className="qty"
                            size="4" />
                        <input
                            onClick={decrementQuantity}
                            type="button" value="-" className="minus" />
                    </div>
                </div>
                <div className="col-md-3 removeItem">
                    <button
                        onClick={removeItem}
                        type="button" className="btn btn-outline-danger btn-xs">
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {

    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        incrementQuantity: (id) => dispatch(incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(decrementQuantity(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);