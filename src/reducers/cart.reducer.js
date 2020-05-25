import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART } from '../actions'

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedMobileIndex;

    switch (action.type) {

        case ADD_TO_CART:
            updatedCart = [...state.cart];
            updatedMobileIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if (updatedMobileIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedMobileIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedMobileIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };

        case REMOVE_FROM_CART:
            updatedCart = [...state.cart];
            updatedMobileIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedMobileIndex, 1);

            return { ...state, cart: updatedCart };
        
        case CLEAR_CART:
            return initialState;

        case INCREMENT_QUANTITY:
            updatedCart = [...state.cart];
            updatedMobileIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedMobileIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedMobileIndex] = incrementedItem;


            return { ...state, cart: updatedCart };

        case DECREMENT_QUANTITY:
            updatedCart = [...state.cart];
            updatedMobileIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedMobileIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedMobileIndex] = decrementedItem;

            return { ...state, cart: updatedCart };

        default:
            return state;

    }
}

export default cartReducer;