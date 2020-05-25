import {ORDER_BY_ASC, ORDER_BY_DESC, CLEAR_PRICE_FILTER} from '../actions'

export const priceFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ORDER_BY_ASC:
            return 'asc';
        case ORDER_BY_DESC:
            return 'desc';
        case CLEAR_PRICE_FILTER:
            return '';
        default:
            return state;
    }
}