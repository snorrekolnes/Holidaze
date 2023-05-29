import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const api = createApi({ reducerPath: 'api', baseQuery: fetchBaseQuery(
    { baseUrl: 'https://api.noroff.dev/api/v1/holidaze' }), 
    endpoints: (builder) => ({ login: builder.mutation({ 
        query: (credentials) => ({ 
            url: '/auth/login', 
            method: 'POST', 
            body: credentials, }), }), }), })
 export const { useLoginMutation } = api