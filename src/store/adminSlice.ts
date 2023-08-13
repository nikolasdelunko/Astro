import { createStore } from "nanostores";

const initialState = {
  edit: false,
  post: null,
  user: null,
  users: null,
  orders: null,
};

const adminStore = createStore(initialState);

export const useAdmin = adminStore.subscribe;

export function setEditAdmin(payload) {
  adminStore.update((state) => {
    state.edit = payload;
  });
}

export function addPost(payload) {
  adminStore.update((state) => {
    state.post = payload;
  });
}

export function addUsers(payload) {
  adminStore.update((state) => {
    const data = payload.map((el) => ({
      id: el._id,
      name: el.name,
      email: el.email,
      date: el.date,
    }));
    state.users = data;
  });
}

export function addUser(payload) {
  adminStore.update((state) => {
    state.user = payload;
  });
}

export function addOrders(payload) {
  adminStore.update((state) => {
    state.orders = payload;
  });
}

export function clearData() {
  adminStore.update((state) => {
    state.post = null;
    state.user = null;
  });
}

export default adminStore;
