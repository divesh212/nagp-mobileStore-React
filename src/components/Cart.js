import React, { Component } from 'react';
import { connect } from 'react-redux';
import {clearCart} from '../actions'
import CartItem from './CartItem'

class Cart extends Component {

    render() {

        const checkout = () => {
            if (this.props.authenticated) {
                alert("ORDER PLACED !! \n Order id: " + Math.floor((Math.random() * 100000) + 1) + "\n Total Amount: Rs" + this.props.totalPrice + "/- only")
                this.props.clearCart();
                this.props.history.push("/mobiles");
            } else {
                alert("You have to first Login to place order!")
                this.props.history.push("/login");
            }
        }

        return (
            <div className="row" style={{paddingTop: "5rem"}}>

                <div className="card col-lg-10" style={{ paddingTop: 40 + 'px' }}>
                    <div className="container">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Your cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {this.props.cartItemCount ? this.props.cartItems.map(cart => (
                                <CartItem key={cart.id} item={cart} />
                            )) : <h1 className="display-4 mt-5 text-center">There is no mobile in your cart</h1>}
                        </div>
                    </div>
                    <div className="card-footer" style={{ paddingBottom: 40 + 'px' }}>
                        <div className="pull-right" style={{ margin: '10px' }}>
                            <div className="pull-right" style={{ margin: '5px' }}>
                                Total : <b>Rs {this.props.totalPrice}/-</b>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-2" style={{ paddingTop: 40 + 'px' }}>
                    {this.props.cartItemCount ? <button className="btn btn-primary" onClick={checkout}>Checkout</button> : ''}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        authenticated: state.login.authenticated,
        cartItems: state.cart.cart,
        cartItemCount: state.cart.cart.reduce((count, currentItem) => {
            return count + currentItem.quantity;
        }, 0),
        totalPrice: state.cart.cart.reduce((count, currentItem) => {
            return count + (currentItem.price * currentItem.quantity);
        }, 0)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart : () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);