import {createSlice} from '@reduxjs/toolkit'
import {setLoadingState} from "./loaderSlice"
import {setError} from "./errorSlice"

// Slice
// A function that accepts an initial state, an object full of reducer functions,
// and a “slice name”, and automatically generates action creators and action types that correspond to the reducers and state.
//The reducer argument is passed to createReducer()
const productsSlice = createSlice({
    name: 'venues',
    initialState: { // Here is the initial state // = data
        venues: [], // e.g
        singleVenue: null,
    },
    reducers: { // Here are the functions which amend the state // mutations for state
        SET_VENUES: (state, action) => { // e.g
           console.log("SET_PRODUCTS: action.payload", action.payload)
            state.venues = action.payload;
        },
        SET_SINGLE_VENUE: (state, action) => {
           console.log("SET_SINGLE_PRODUCT: action.payload", action.payload)
            state.singleVenue = action.payload;
        }
    },
});
export default productsSlice.reducer

// Actions // api calls etc
const {SET_VENUES} = productsSlice.actions
const {SET_SINGLE_VENUE} = productsSlice.actions

// Fetch multiple products
export const fetchVenues = () => async (dispatch) => {
    dispatch(setLoadingState(true)); // we are showing the loader
    try {
        // const res = await api.post('/api/auth/login/', { username, password })
        const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
        const data = await response.json();
        console.log(data);

        // dispatch an action with the retrieved products data
        dispatch(SET_VENUES(data));
        dispatch(setLoadingState(false)); // we are hiding the loader
    } catch (e) {
        dispatch(setLoadingState(false)); // we are hiding the loader
        // handle any errors that occur during fetching the products data
        dispatch(setError(true, e.message));
        return console.error(e.message);
    }
}
/*
// Fetch single product
export const fetchProductById = (id) => async dispatch => {
    dispatch(setLoadingState(true));
    dispatch(SET_SINGLE_PRODUCT({}));
    let response
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`);
        const data = await response.json();
        console.log("Single Product Data: ", data);
        // dispatch an action with the retrieved data
        dispatch(SET_SINGLE_PRODUCT(data));
        dispatch(setLoadingState(false));
    } catch (e) {
        // handle any errors that occur during the fetch
        console.log("here error happened :( ")
        return console.error(e.message);
    }
    // check if the response is not ok
    if (response.ok) {
        console.log("the response is correct");

    } else {
        console.log("the response is not ok");
        dispatch(setError(true,"some error happened"));
    }
}
*/