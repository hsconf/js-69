import {AsyncThunk, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiShows, Show} from "../types";

interface TvShowsState {
    tvShow: string;
    showName: string;
    shows: Show[];
    loading: boolean;
    error: string | null;
}

const initialState: TvShowsState = {
    tvShow: '',
    showName: '',
    shows: [],
    loading: false,
    error: null,
};
type FetchTvShowsThunk = AsyncThunk<Show[], void, {}>;
export const fetchTvShowsThunk: FetchTvShowsThunk = createAsyncThunk('tvShows/fetch', async () => {
    const { data: shows } = await axios.get<ApiShows[]>('http://api.tvmaze.com/search/shows?q=csi/');

    if (shows) {
        return shows.map<Show>((item) => item.show);
    }
    return [];
});

const tvShowsSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers: {
        show: (state, action) => {
            state.showName = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTvShowsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTvShowsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.shows = action.payload;
            })
            .addCase(fetchTvShowsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch TV shows';
            });
    }
});

export const { show } = tvShowsSlice.actions;
export const tvShowReducer = tvShowsSlice.reducer;
