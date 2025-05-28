import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import VITE_API_URL from '@src/environment/environment';

const urlApi = VITE_API_URL;

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