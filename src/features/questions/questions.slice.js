import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadQuestions = createAsyncThunk('questions/loadQuestions', async (step) => {
  try {
    const response = await axios.get("http://localhost:1337/courses/" + step + "");
    return response;

  } catch (error) {
    return error;
  }

});


export const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    status: 'idle',
    error: null,
    questions: [],
    questionLength: 0,
    initialQuestionQueue: [],
  },
  reducers: {
    makeInitial: (state) => {
      let initial = [];
      for (let i = 0; i < state.questionLength; i++) {
        initial[i] = i
      }
      state.initialQuestionQueue = initial;
      
    }
  },

  extraReducers: {
    // You can show loading state in the UI
    [loadQuestions.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    // Render the API response
    [loadQuestions.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.questions = action.payload.data.questions;
      state.questionLength = action.payload.data.questions.length;
    },
    // Display error state
    [loadQuestions.error]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
    [loadQuestions.rejected]: (state, action) => {
      state.status = 'error';
      state.questions = [];
      state.error = action.payload.message;
    },

  },
});
export const { makeInitial } = questionSlice.actions;
export const selectQuestions = (state) => state.question.questions;
export const selectInitialQuestionQueue = (state) => state.question.initialQuestionQueue;

export default questionSlice.reducer;