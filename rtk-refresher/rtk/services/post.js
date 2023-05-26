import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const postApi = createApi({
 // The unique key that defines where the Redux store will store our cache.
 reducerPath: 'postApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getAllPost: builder.query({
    //  get -->   'https://jsonplaceholder.typicode.com/posts',
   query: () => {
    return {
    url: `posts`,
    method: 'GET'
   }}
  }),



  getPostbyid: builder.query({
    //  get -->   'https://jsonplaceholder.typicode.com/posts',
   query: (id) => {
    return {
    url: `posts/${id}`,
    method: 'GET'
   }}
  }),
  

  deletepostbyid : builder.mutation({
    query : (id) => ({
        url : `posts/${id}`, 
        method :"DELETE"
    })
  })
  

 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllPostQuery  , useGetPostbyidQuery  , useDeletepostbyidMutation } = postApi




 