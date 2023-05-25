import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0.0001 },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    zero: (state) => {
      state.count = state.count*state.count;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement, zero } = counterSlice.actions;

export default counterSlice.reducer;
