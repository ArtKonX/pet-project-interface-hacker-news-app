import { configureStore } from '@reduxjs/toolkit';
import matrixNewsApi from '@src/redux/services/matrixNewsApi';
import NewsSlice from '@redux/slices/newsSlice';
import commentsApi from '@src/redux/services/commentsApi';

const store = configureStore({
    reducer: {
        [matrixNewsApi.reducerPath]: matrixNewsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        newsData: NewsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
                ignoredPaths: ['persist.register']
            }
        }).concat(matrixNewsApi.middleware)
            .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;