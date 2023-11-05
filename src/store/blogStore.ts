import { atom, action } from "nanostores";

interface State {
  [index: number]: string;
}

export const listBlog = atom<[]>([]);
export const relatedArray = atom<State>([]);

export function setListBlog(payload: []) {
  listBlog.set(payload);
}

export const addRelatedId = action(
  relatedArray,
  "addRelatedId",
  (store: any, payload) => {
    const item = payload;
    const index = store.findIndex((id: number) => id === item);

    if (index === -1) {
      if (store.length >= 3) {
        store.shift();
      }
      store.push(item);
    } else {
      store.splice(index, 1);
      store.push(item);
    }

    localStorage.setItem("related", JSON.stringify(store));
  }
);

//! under the old code  & need check new one

// export function addRelatedId(payload) {
//   blogStore.update((state) => {
//     const item = payload;
//     const index = state.relatedArray.findIndex((id) => id === item);

//     if (index === -1) {
//       if (state.relatedArray.length >= 3) {
//         state.relatedArray.shift();
//       }
//       state.relatedArray.push(item);
//     } else {
//       state.relatedArray.splice(index, 1);
//       state.relatedArray.push(item);
//     }

//     localStorage.setItem("related", JSON.stringify(state.relatedArray));
//   });
// }

// const initialState = {
//   listBlog: null,
//   relatedArray:
//     (localStorage.getItem("related") &&
//       JSON.parse(localStorage.getItem("related"))) ||
//     [],
// };
