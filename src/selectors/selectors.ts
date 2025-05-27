import { RootState } from "@redux/store/index";
import { createSelector } from 'reselect';

export const selectNewsData = createSelector(
    (state: RootState) => state.newsData,
    (newsData) => ({
        ...newsData,
        news: newsData.news
    })
);