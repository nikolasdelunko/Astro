import { createStore } from "nanostores";
const userPay = localStorage.getItem("userPayStickers");

const initialState = {
  listPhoto: null,
  pay: userPay === "true" ? true : false || false,
  client: JSON.parse(localStorage.getItem("client")) || [],
};

const stickersStore = createStore(initialState);

export const useStickers = stickersStore.subscribe;

export function setListPhoto(payload) {
  stickersStore.update((state) => {
    state.listPhoto = payload;
  });
}

export function setPaySticker(payload) {
  stickersStore.update((state) => {
    state.pay = payload;
    localStorage.setItem("userPayStickers", payload);
  });
}

export function setClient(payload) {
  stickersStore.update((state) => {
    state.client = [...state.client, payload];
    localStorage.setItem("client", JSON.stringify(state.client));
  });
}

export default stickersStore;
