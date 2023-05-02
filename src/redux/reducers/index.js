import { combineReducers } from 'redux';
import handleCart from './handleCart';
import handleDiscount from './handleDiscount';

const rootReducers = combineReducers({ handleCart, handleDiscount });

export default rootReducers;
