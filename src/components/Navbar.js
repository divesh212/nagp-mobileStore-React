import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions'

const Navbar = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg justify-content-between fixed-top">
            <a className="navbar-brand" href="/">Mobile Store</a>
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: '/cart' }} > Cart {props.cartLength ? `(${props.cartLength})` : ''}</Link>
                </li>
                {

                    props.authenticated
                        ? <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" onClick={logout} href="/">Logout</a>
                            </div>
                        </li>

                        : <li className="nav-item">
                            <Link className="nav-link" to={{ pathname: '/login' }} > Login </Link>
                        </li>
                }

            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.login.authenticated,
        username: state.login.username,
        cartLength: state.cart.cart.length
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);