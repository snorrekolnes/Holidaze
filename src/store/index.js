import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/venueSlice";
import loaderSlice from "./modules/loaderSlice"

import errorSlice from "./modules/errorSlice";
import Login from '../components/views/LoginMain';
import authorizationSlice from './modules/authorizationSlice';
import venueByIdSlice from './modules/venueByIdSlice';





const reducer = combineReducers({
    auth:authorizationSlice,
    singleVenue: venueByIdSlice,
    venues: productsSlice, 
    loader: loaderSlice,
    error: errorSlice
})
const index = configureStore({
    reducer,
})
export default index;