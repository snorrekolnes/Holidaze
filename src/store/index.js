import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/venueSlice";
import loaderSlice from "./modules/loaderSlice"

import errorSlice from "./modules/errorSlice";
import Login from '../components/views/LoginMain';
import authorizationSlice from './modules/authorizationSlice';




const reducer = combineReducers({
    auth:authorizationSlice,
    // here we will be adding reducers
    venues: productsSlice, // NOTE: Remember this name you will use with useSelector
    loader: loaderSlice,
    error: errorSlice
})
const index = configureStore({
    reducer,
})
export default index;