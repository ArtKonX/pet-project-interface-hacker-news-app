import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlApi = import.meta.env.VITE_API_URL;

const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
    endpoints: (builder) => ({
        getComments: builder.mutation({
            query: ({ id }) => ({
                url: `/item/${id}.json`,
                params: {
                    print: 'pretty',
                }
            })
        }),
        getEmbeddedComments: builder.mutation({
            query: ({ id }) => ({
                url: `/item/${id}.json`,
                params: {
                    print: 'pretty',
                }
            })
        }),
    })
});

export default commentsApi;
export const { useGetCommentsMutation, useGetEmbeddedCommentsMutation } = commentsApi;