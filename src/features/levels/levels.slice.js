import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadlevels = createAsyncThunk('levels/loadLevels', async (userId) => {
  try {
    const response = await axios.get('http://localhost:1337/levels');
    return response;
  } catch (error) {
    return error;
  }

});

export const updateLesson = createAsyncThunk('levels/loadLevels', async (userId) => {
  try {
    const response = await axios.get('http://localhost:1337/levels/courses');
    return response;
  } catch (error) {
    return error;
  }

});


export const levelSlice = createSlice({
  name: 'levels',
  initialState: {
    status: 'idle',
    error: null,
    levels: [],
  },
  reducers: {},

  extraReducers: {
    // You can show loading state in the UI
    [loadlevels.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    // Render the API response
    [loadlevels.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.levels = action.payload.data;
    },
    // Display error state
    [loadlevels.error]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
    [loadlevels.rejected]: (state, action) => {
      state.status = 'error';
      state.levels = [];
      state.error = action.payload.message;
    },

  },
});

export const selectLevels = (state) => state.level.levels;

export default levelSlice.reducer;