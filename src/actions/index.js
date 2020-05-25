export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const FETCH_MOBILES = "FETCH_MOBILES";
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const CLEAR_CART = "CLEAR_CART";
export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_PRICE_FILTER = 'CLEAR_PRICE_FILTER';
export const SEARCH_FIELD = 'SEARCH_FIELD';

export const login = (authenticated, username) => {

    return {
        type: LOGIN,
        payload: {
            authenticated: authenticated,
            username: username
        }
    }
}

export const logout = () => {

    return {
        type: LOGOUT
    }
}

export const fetchMobiles = () => {

    return dispatch => {

        fetch("http://localhost:3004/mobiles")
            .then(response => response.json(),
                err => console.log("Error occured while fetching mobiles", err))
            .then((json) => dispatch({
                type: FETCH_MOBILES,
                payload: json
            }))
    }
}

export const addToCart = mobile => {
    return {
        type: ADD_TO_CART,
        payload: mobile
    }
};

export const removeFromCart = mobileId => {
    return {
        type: REMOVE_FROM_CART,
        payload: mobileId
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const incrementQuantity = mobileId => {
    return{
        type: INCREMENT_QUANTITY,
        payload: mobileId
    }
};

export const decrementQuantity = mobileId => {
  return {
      type: DECREMENT_QUANTITY,
      payload: mobileId
  }
};

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
};

export const orderByDesc =  () => {
    return {
        type: ORDER_BY_DESC
    }
};

export const clearFilter = () => {
    return {
        type: CLEAR_PRICE_FILTER
    }
};

export const search = (searchName) => {
    return {
        type: SEARCH_FIELD,
        payload: searchName
    }
}