import {combineReducers} from 'redux';
import loginReducer from './login.reducer'
import mobileReducer from './mobiles.reducer'
import cartReducer from './cart.reducer'
import {priceFilterReducer} from './pricefilter.reducer'
import {searchFilterReducer} from './serachfilter.reducer'

export default combineReducers ({
    login : loginReducer,
    mobiles: mobileReducer,
    cart: cartReducer,
    price: priceFilterReducer,
    search: searchFilterReducer
});