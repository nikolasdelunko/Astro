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
  modalConfirm.set({ ...modalConfirm.get(), open: ModalConfirm });
}

export function setConfirmText(ModalConfirm: string) {
  modalConfirm.set({ ...modalConfirm.get(), text: ModalConfirm });
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

export function setPage(Page: string) {
  page.set(Page);
}