import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  userData: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setStep, setUserData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
