import React from 'react';
import { Link } from 'react-router-dom';
import {addToCart} from '../actions'
import {connect} from 'react-redux';

const Mobile = (props) => {

    const handleClick = () => {
        props.addToCart(props.mobile);
    }

    return (
        <div className="card" style={{width: 14+"rem", display: "flex"}}>
            <img class="card-img-top" src={props.mobile.img} style={{height: "250px", width: "100%"}}></img>
            <div className="card-body">
                <h5 className="card-title">{props.mobile.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{props.mobile.price}</p>
                <Link className="card-link" to={`/mobiles/${props.mobile.id}`}>View</Link>
                <button onClick={handleClick} className="btn btn-light">Add to Cart</button>
            </div>
        </div>
    )
}


const mapDispatchToProps =  dispatch => {
    
    return {
      addToCart: (mobile) => dispatch(addToCart(mobile))
    }
  }

export default connect(null, mapDispatchToProps)(Mobile);