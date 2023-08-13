import { createStore } from "nanostores";

const initialState = {
  listBlog: null,
  relatedArray:
    (localStorage.getItem("related") &&
      JSON.parse(localStorage.getItem("related"))) ||
    [],
};

const blogStore = createStore(initialState);

export const useBlog = blogStore.subscribe;

export function setListBlog(payload) {
  blogStore.update((state) => {
    state.listBlog = payload;
  });
}

export function addRelatedId(payload) {
  blogStore.update((state) => {
    const item = payload;
    const index = state.relatedArray.findIndex((id) => id === item);

    if (index === -1) {
      if (state.relatedArray.length >= 3) {
        state.relatedArray.shift();
      }
      state.relatedArray.push(item);
    } else {
      state.relatedArray.splice(index, 1);
      state.relatedArray.push(item);
    }

    localStorage.setItem("related", JSON.stringify(state.relatedArray));
  });
}

export default blogStore;
