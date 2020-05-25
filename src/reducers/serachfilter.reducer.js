import {SEARCH_FIELD} from '../actions'

export const searchFilterReducer = (state = '', action) => {
    switch(action.type) {
        case SEARCH_FIELD:
            return {
                ...state,
                searchField : action.payload
            }
        default:
            return '';
    }
}