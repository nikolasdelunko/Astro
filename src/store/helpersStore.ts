import { atom } from "nanostores";

interface ModalConfirmState {
  text: string;
  open: boolean;
}

export const $modal = atom<boolean | {}>(false);
export const $modalConfirm = atom<ModalConfirmState>({
  text: "",
  open: false,
});
export const $modalSticker = atom<boolean>(false);
export const modalStickerMobile = atom<boolean>(false);
export const $burger = atom<boolean>(false);
export const mobile = atom<boolean>(false);
export const $page = atom<string | null>(null);
export const $step = atom<number>(0);
export const touch = atom<boolean>(false);
export const openCard = atom<boolean | number>(false);

export function openModal(Modal: boolean | {}) {
  $modal.set(Modal);
	console.log("Modal", Modal)
}

export function setConfirmOpen(ModalConfirm: boolean) {
  $modalConfirm.set({ ...$modalConfirm.get(), open: ModalConfirm });
}

export function setOpenCard(OpenCard: boolean | number) {
  openCard.set(OpenCard);
}

export function setConfirmText(ModalConfirm: string) {
  $modalConfirm.set({ ...$modalConfirm.get(), text: ModalConfirm });
}

export function openBurger(Burger: boolean) {
  $burger.set(Burger);
  console.log("aa", Burger, $burger.get());
}

export function setModalSticker(ModalSticker: boolean) {
  $modalSticker.set(ModalSticker);
}

export function setModalStickerMobile(ModalStickerMobile: boolean) {
  modalStickerMobile.set(ModalStickerMobile);
}

export function setPage(Page: string | null) {
  console.log("This page is", Page);
  $page.set(Page);
}

export function setStep(Step: number) {
  $step.set(Step);
}
