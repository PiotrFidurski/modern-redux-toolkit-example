import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // we can mutate the state like this because
      // createSlice uses immer under the hood
      // as opposed of doing the usual {...state, value: state.value +1}
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
