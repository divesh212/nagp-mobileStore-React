import { FETCH_MOBILES } from '../actions';

const initialState = {
    mobiles: null,
};

const mobileReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_MOBILES:
            return {
                ...state,
                mobiles : action.payload
            }
        default:
            return state;
    }
    
}

export default mobileReducer;