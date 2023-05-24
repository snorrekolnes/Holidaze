import {createSlice} from '@reduxjs/toolkit'

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false
    },
    reducers: { 
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})


const {actions, reducer} = loaderSlice;
export default reducer;
const {SET_LOADER} = actions;

// Actions

export const setLoadingState = (loadingStatus) => (dispatch) => {
    dispatch(SET_LOADER(loadingStatus));
}