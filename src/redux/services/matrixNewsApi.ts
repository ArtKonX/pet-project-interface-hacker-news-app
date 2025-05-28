import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import VITE_API_URL from '@src/environment/environment';

const urlApi = VITE_API_URL;

const matrixNewsApi = createApi({
    reducerPath: 'matrixNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
    endpoints: (builder) => ({
        getNewStories: builder.query({
            query: (options = { offset: 0 }) => ({
                url: 'newstories.json',
                params: {
                    print: 'pretty',
                    limitToFirst: options.offset + 10,
                    orderBy: '"$key"'
                }
            }),
            transformResponse: async (response, _, { offset = 0 }) => {
                const start = offset || 0;
                const end = start + 10;
                const storyIds = response.slice(start, end);
                const stories = await Promise.all(
                    storyIds.map(async (id: number) => {
                        const storyResponse = await fetch(`${urlApi}item/${id}.json`);
                        return storyResponse.json();
                    })
                );
                return stories;
            }
        }),
        getNewStory: builder.query({
            query: ({ id }: { id: string }) => ({
                url: `item/${id}.json`,
                params: {
                    print: 'pretty'
                }
            })
        })
    })
});

export default matrixNewsApi;
export const { useGetNewStoriesQuery, useGetNewStoryQuery } = matrixNewsApi;