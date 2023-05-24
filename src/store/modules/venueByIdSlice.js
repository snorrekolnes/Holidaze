import {createSlice} from '@reduxjs/toolkit'
import {setLoadingState} from "./loaderSlice"
import {setError} from "./errorSlice"


const venueSliceById = createSlice({
    name: 'singleVenue',
    initialState: { 
        singleVenue: {

        },
    },
    reducers: { 
        SET_SINGLE_VENUE: (state, action) => {
           console.log("SET_SINGLE_PRODUCT: action.payload", action.payload)
            state.singleVenue = action.payload;
        }
    },
});
export default venueSliceById.reducer

const {SET_SINGLE_VENUE} = venueSliceById.actions

export const fetchProductById = (id) => async dispatch => {
    dispatch(setLoadingState(true));
    dispatch(SET_SINGLE_VENUE({}));
    let response
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}?_bookings=true`);
        const data = await response.json();
        console.log("Single Product Data: ", data);

        dispatch(SET_SINGLE_VENUE(data));
        dispatch(setLoadingState(false));
    } catch (e) {

        console.log("here error happened :( ")
        return console.error(e.message);
    }

    if (response.ok) {
        console.log("the response is correct");

    } else {
        console.log("the response is not ok");
        dispatch(setError(true,"some error happened"));
    }
}