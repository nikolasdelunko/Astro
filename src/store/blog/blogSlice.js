import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listBlog: null,
  relatedArray:
  (localStorage.getItem("related") &&
    JSON.parse(localStorage.getItem("related"))) ||
  [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setListBlog(state, action) {
      state.listBlog = action.payload;
    },
    addToTEst(state, action) {
      state.test = action.payload;
    },
    addRelatedId(state, action) {
      const item = action.payload;
      state.relatedArray.push(item);
      if (!state.relatedArray.find((id) => item === id)) {
        state.relatedArray.push(item);
      } else {
        const newArr = state.relatedArray.filter((id) => id !== item);
        newArr.push(item);
        state.relatedArray = newArr;
      }
      if (state.relatedArray.length > 3) {
        state.relatedArray = state.relatedArray.slice(1, 4);
      }
      localStorage.setItem("related", JSON.stringify(state.relatedArray));
    },
  },
});

export const { setListBlog, addRelatedId } = blogSlice.actions;

export default blogSlice.reducer;
