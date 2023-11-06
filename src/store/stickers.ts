import { atom } from "nanostores";
const userPay = localStorage.getItem("userPayStickers");

interface StickersStoreState {
  listPhoto: null;
  pay: boolean;
  client: string | [];
}

export const stickersStore = atom<StickersStoreState>({
  listPhoto: null,
  pay: userPay === "true" ? true : false || false,
  client: localStorage.getItem("client") || [],
});

export function setListPhoto(Photo: any) {
  stickersStore.set({ ...stickersStore.get(), listPhoto: Photo });
}

export function setPaySticker(Pay: any) {
  stickersStore.set({ ...stickersStore.get(), pay: Pay });
  localStorage.setItem("userPayStickers", Pay);
}

export function setClient(Client: any) {
  stickersStore.set({ ...stickersStore.get(), client: Client });
  localStorage.setItem("client", JSON.stringify(Client));
}

export default stickersStore;
