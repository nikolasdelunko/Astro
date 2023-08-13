// import { atom } from "nanostores";

// interface Mconf {
//   text: string;
//   open: boolean;
// }

// export const modal = atom(false);
// export const modalConfirm = atom({
//   text: "",
//   open: false,
// });
// export const modalSticker = atom(true);
// export const modalStickerMobile = atom(false);
// export const burger = atom(false);
// export const mobile = atom(false);
// export const page = atom(null);
// export const step = atom(null);
// export const touch = atom(false);
// export const openCard = atom(false);

// export function openModal(Modal: boolean) {
//   modal.set(Modal);
// }

// export function setConfirmOpen(ModalConfirm: boolean) {
//   modalConfirm.setKey("open", ModalConfirm);
// }

// export function setConfirmText(ModalConfirm: string) {
//   modalConfirm.setKey("text", ModalConfirm);
// }

// export function openBurger(Burger: boolean) {
//   burger.set(Burger);
// }

// export function setModalSticker(ModalSticker: boolean) {
//   modalSticker.set(ModalSticker);
// }

// export function setModalStickerMobile(ModalStickerMobile: boolean) {
//   modalStickerMobile.set(ModalStickerMobile);
// }

import { atom } from "nanostores";

interface ModalConfirmState {
  text: string;
  open: boolean;
}

export const modal = atom<boolean>(false);
export const modalConfirm = atom<ModalConfirmState>({
  text: "",
  open: false,
});
export const modalSticker = atom<boolean>(true);
export const modalStickerMobile = atom<boolean>(false);
export const burger = atom<boolean>(false);
export const mobile = atom<boolean>(false);
export const page = atom<number | null>(null);
export const step = atom<number>(0);
export const touch = atom<boolean>(false);
export const openCard = atom<boolean>(false);

export function openModal(Modal: boolean) {
  modal.set(Modal);
}

export function setConfirmOpen(ModalConfirm: boolean) {
  modalConfirm.update((state) => ({ ...state, open: ModalConfirm }));
}

export function setConfirmText(ModalConfirm: string) {
  modalConfirm.update((state) => ({ ...state, text: ModalConfirm }));
}

export function openBurger(Burger: boolean) {
  burger.set(Burger);
	console.log("aa", Burger)
}

export function setModalSticker(ModalSticker: boolean) {
  modalSticker.set(ModalSticker);
}

export function setModalStickerMobile(ModalStickerMobile: boolean) {
  modalStickerMobile.set(ModalStickerMobile);
}
