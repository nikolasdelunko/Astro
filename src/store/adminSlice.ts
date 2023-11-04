import { atom } from "nanostores";

interface User {
  id: number;
  name: string;
  email: string;
  date: string;
}

export const post = atom<{}>({});
export const admin = atom<boolean>(false);
export const user = atom<User | {}>({});
export const users = atom<{}>({});
export const orders = atom<{}>({});

export function setEditAdmin(EditAdmin: boolean) {
  admin.set(EditAdmin);
}

export function addPost(payload: {}) {
  post.set(payload);
}

export function addUsers(payload: any) {
  const data = {
    id: payload._id,
    name: payload.name,
    email: payload.email,
    date: payload.date,
  };
  users.set({ ...user.get(), data });
}

export function addUser(payload: User) {
  user.set(payload);
}

export function addOrders(payload: {}) {
	orders.set(payload)
}

export function clearData() {
	post.set({})
	user.set({})
}

export default adminStore;
