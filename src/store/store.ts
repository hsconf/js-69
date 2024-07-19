import {configureStore} from "@reduxjs/toolkit";
import {tvShowReducer} from "../slices/tvShows";

export const store = configureStore({
    reducer: {
        tvShows: tvShowReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;