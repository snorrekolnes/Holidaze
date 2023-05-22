import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "./modules/authorizationSlice"
/*
const baseQuery = fetchBaseQuery ({
baseUrl: "https://api.noroff.dev/api/v1/holidaze",
loginUrl: "/auth/login",
signUpUrl: "",
credentials: "include",

})

const baseQueryReRouting = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403){
    const refresh = await baseQuery("/refresh", api, extraOptions)
console.log(refresh)
if (refresh?.data) {
    const user = api.getState().auth.user
    api.dispatch(setCredentials({...refresh.data, user}))
    result = await baseQuery(args, api, extraOptions)
} else {
    api.dispatch(logOut())
}
}
return result
}

export const apiSlice = createApi({
baseQuery: baseQueryReRouting,
endpoints: builder => ({})
})*/