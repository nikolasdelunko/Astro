import { createStore, createEffect } from "nanostores";
import { getUserByToken } from "../../utils/Api/userApi";

const initialState = {
  data: JSON.parse(localStorage.getItem("userInfo")) || null,
  error: null,
  isLoading: false,
  isLogin: !!JSON.parse(localStorage.getItem("userInfo")) || false,
};

const userStore = createStore(initialState);

export const useUser = userStore.subscribe;

export const fetchUser = createEffect(async () => {
  try {
    userStore.update((state) => {
      state.isLoading = true;
      state.error = null;
    });

    const response = await getUserByToken();

    userStore.update((state) => {
      delete response.data.password;
      state.data = response.data;
      state.isLoading = false;
      state.error = null;
    });
  } catch (error) {
    console.log("Trouble with auth, relogin please");

    userStore.update((state) => {
      localStorage.removeItem("userInfo");
      state.isLoading = false;
      state.error = "Error happened while user data loading. Relogin plz";
    });
  }
});

export function setLogin(payload) {
  userStore.update((state) => {
    state.isLogin = payload;
  });
}

export function setNewData(payload) {
  userStore.update((state) => {
    state.data = payload;
    localStorage.setItem("userInfo", JSON.stringify(payload));
  });
}

export function logOut() {
  userStore.update((state) => {
    localStorage.removeItem("userInfo");
    state.data = null;
  });
}

export default userStore;
