import { atom } from "nanostores";
const userPay = localStorage.getItem("userPayStickers");

// const initialState = {
//   listPhoto: null,
//   pay: userPay === "true" ? true : false || false,
//   client: JSON.parse(localStorage.getItem("client")) || [],
// };
interface StickersStoreState {
  listPhoto: null;
  pay: boolean;
	client: null;
}

// const stickersStore = createStore(initialState);

const stickersStore = atom<StickersStoreState>({
  listPhoto: null,
  pay: userPay === "true" ? true : false || false,
  client: JSON.parse(localStorage.getItem("client")) || [],
});

// export const useStickers = stickersStore.subscribe;

export function setListPhoto(Photo: <T>) {
  stickersStore.set({ ...stickersStore.get(), listPhoto: Photo });
}

// export function setListPhoto(payload) {
//   stickersStore.update((state) => {
//     state.listPhoto = payload;
//   });
// }

export function setPaySticker(Pay: boolean) {
  stickersStore.set({ ...stickersStore.get(), pay: Pay});
	localStorage.setItem("userPayStickers", Pay)
}

// export function setPaySticker(payload) {
//   stickersStore.update((state) => {
//     state.pay = payload;
//     localStorage.setItem("userPayStickers", payload);
//   });
// }

// export function setClient(payload) {
//   stickersStore.update((state) => {
//     state.client = [...state.client, payload];
//     localStorage.setItem("client", JSON.stringify(state.client));
//   });
// }

export function setClient(Client: <T>) {
  stickersStore.set({ ...stickersStore.get(), client: Client});
	localStorage.setItem("client", JSON.stringify(Client));
}

export default stickersStore;
