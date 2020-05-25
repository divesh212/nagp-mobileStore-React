import React from 'react';
import {addToCart} from '../actions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MobileDetail = (props) => {

    const handleClick = () => {
        props.addToCart(props.mobile);
    }

    return (
        <div className="row" style={{paddingTop: "5rem"}}>
            <div className="col-md-4">
                <img src={props.mobile.img} style={{width: "auto", height: "400px"}}/>
            </div>
            <div className="col-md-6">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{props.mobile.name}</td>
                        </tr>
                        <tr>
                            <th>CPU</th>
                            <td>{props.mobile.cpu}</td>
                        </tr>
                        <tr>
                            <th>Camera</th>
                            <td>{props.mobile.camera}</td>
                        </tr>
                        <tr>
                            <th>Display</th>
                            <td>{props.mobile.display}</td>
                        </tr>
                        <tr>
                            <th>Battery</th>
                            <td>{props.mobile.battery}</td>
                        </tr>
                        <tr>
                            <th>Memory</th>
                            <td>{props.mobile.memory}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>Rs {props.mobile.price}/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-2">
                <button
                    className="btn btn-outline-primary" onClick={handleClick}> Add to Cart
                </button>
                <Link className="nav-link" to={{ pathname: '/mobiles' }} > Back </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {

    const mobile = state.mobiles.mobiles.find(mobile => mobile.id === +props.match.params.id);

    return {
        mobile
    }
};

const mapDispatchToProps =  dispatch => {
    
    return {
      addToCart: (mobile) => dispatch(addToCart(mobile))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetail);