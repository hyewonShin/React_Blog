import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push(action.payload);
    },
  },
});

console.log(toastSlice.actions.addToast("hello"));
export const { addToast } = toastSlice.actions;

export default toastSlice.reducer;
