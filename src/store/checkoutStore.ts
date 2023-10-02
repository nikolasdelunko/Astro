import { atom } from "nanostores";

//! Need check in ! 

interface CheckoutStoreState {
  step: number;
  userData: null;
}

const checkoutStore = atom<CheckoutStoreState>({
  step: 1,
  userData: null,
});

export function setStep(Step: number) {
  checkoutStore.set({ ...checkoutStore.get(), step: Step });
}

export function setUserData(Data: object) {
  checkoutStore.set({ ...checkoutStore.get(), userData: Data });
}


export default checkoutStore;
