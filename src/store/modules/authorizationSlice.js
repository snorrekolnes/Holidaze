import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name:"auth",
    initialState: {
        name: localStorage.user,
        token: localStorage.accessToken
    },
    reducers: {
        setCredentials: (state, action ) => {
            const {user, accessToken} = action.payload
            state.name = user,
            state.token = accessToken
        },
    },
})

export const {setCredentials, logOut} = authorizationSlice.actions

export default authorizationSlice.reducer

export const selectUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token