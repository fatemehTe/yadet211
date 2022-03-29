import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import levelReducer from '../features/levels/levels.slice';
import questionReducer from '../features/questions/questions.slice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    level: levelReducer,
    question: questionReducer,
  },
});
export default store;