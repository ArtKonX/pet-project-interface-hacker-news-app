import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";
import { NewsDataItem } from "@src/interfaces/news";

interface InitialStateNewsSlice {
    news: NewsDataItem[]
}

interface PushNextNewsPayloadAction {
    nextNews: NewsDataItem[]
}

const initialState = {
    news: [],
} as InitialStateNewsSlice

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const NewsSlice = createSliceWithThunk({
    name: "newsData",
    initialState,
    selectors: {
        catalogItemState: (state) => state,
    },
    reducers: (create) => ({
        pushNextNews: create.reducer((state, action: PayloadAction<PushNextNewsPayloadAction>) => {
            const { nextNews } = action.payload;

            const newsIds = new Set(state.news.map(item => item.id));

            state.news = [...state.news,
            ...nextNews.filter(item => !newsIds.has(item.id))];
        }),
        resetNews: create.reducer((state) => {

            state.news = [];
        }),
        setNewNews: create.reducer((state, action: PayloadAction<PushNextNewsPayloadAction>) => {
            const { nextNews } = action.payload;

            state.news = nextNews;
        }),
    }),
});

export const { pushNextNews, resetNews, setNewNews } = NewsSlice.actions;
export default NewsSlice.reducer;