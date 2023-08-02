import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  modalConfirm: {
    text: "",
    open: false,
  },
  modalSticker: false,
  modalStickerMobile: false,
  burger: false,
  mobile: true,
  page: null,
  step: 0,
  touch: false,
  openCard: false,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
    addMobile(state, action) {
      state.mobile = action.payload;
    },
    openBurger(state, action) {
      state.burger = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
    setTouch(state, action) {
      state.touch = action.payload;
    },
    setConfirmOpen(state, action) {
      state.modalConfirm.open = action.payload;
    },
    setConfirmText(state, action) {
      state.modalConfirm.text = action.payload;
    },
    setModalSticker(state, action) {
      state.modalSticker = action.payload;
    },
    setOpenCard(state, action) {
      state.openCard = action.payload;
    },
    setModalStickerMobile(state, action) {
      state.modalStickerMobile = action.payload;
    },
  },
});

export const {
  openModal,
  addMobile,
  openBurger,
  setPage,
  setStep,
  setTouch,
  setConfirmOpen,
  setConfirmText,
  setModalSticker,
  setOpenCard,
  setModalStickerMobile,
} = helpersSlice.actions;

export default helpersSlice.reducer;
