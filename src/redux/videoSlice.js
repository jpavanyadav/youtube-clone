import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVideos } from '../utils/api';

export const getTrendingVideos = createAsyncThunk(
  'videos/getTrendingVideos',
  async () => await fetchVideos('videos?part=snippet&chart=mostPopular&maxResults=20')
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrendingVideos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default videoSlice.reducer;
