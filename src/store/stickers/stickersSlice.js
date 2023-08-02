import { createSlice } from "@reduxjs/toolkit";
const userPay = localStorage.getItem('userPayStickers');


const initialState = {
  listPhoto: null,
	pay:  userPay === "true" ? true : false || false,
	client : JSON.parse(localStorage.getItem('client')) || []
};

const stickersSlice = createSlice({
  name: "Stickers",
  initialState,
  reducers: {
    setListPhoto(state, action) {
      state.listPhoto = action.payload;
    },
		setPaySticker(state, action) {
      state.pay = action.payload;
			localStorage.setItem("userPayStickers", action.payload);
    },
		setClient(state, action) {
			const data = []
			data.push(...state.client, action.payload)
      state.client = data;
			localStorage.setItem('client', JSON.stringify(data))
    },
  },
});

export const { setListPhoto, setPaySticker, setClient } = stickersSlice.actions;

export default stickersSlice.reducer;
