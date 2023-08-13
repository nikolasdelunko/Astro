import { createStore } from "nanostores";

const initialState = {
  step: 1,
  userData: null,
};

const checkoutStore = createStore(initialState);

export const useCheckout = checkoutStore.subscribe;

export function setStep(payload) {
  checkoutStore.update((state) => {
    state.step = payload;
  });
}

export function setUserData(payload) {
  checkoutStore.update((state) => {
    state.userData = payload;
  });
}

export default checkoutStore;
