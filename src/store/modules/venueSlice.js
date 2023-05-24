import {createSlice} from '@reduxjs/toolkit'
import {setLoadingState} from "./loaderSlice"
import {setError} from "./errorSlice"


const productsSlice = createSlice({
    name: 'venues',
    initialState: { 
        venues: [], 
        singleVenue: null,
    },
    reducers: { 
        SET_VENUES: (state, action) => { 
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


const {SET_VENUES} = productsSlice.actions
const {SET_SINGLE_VENUE} = productsSlice.actions


export const fetchVenues = () => async (dispatch) => {
    dispatch(setLoadingState(true)); 
    try {
 
        const response = await fetch('https://api.noroff.dev/api/v1/holidaze/venues');
        const data = await response.json();
        console.log(data);


        dispatch(SET_VENUES(data));
        dispatch(setLoadingState(false));
    } catch (e) {
        dispatch(setLoadingState(false)); 

        dispatch(setError(true, e.message));
        return console.error(e.message);
    }
}
