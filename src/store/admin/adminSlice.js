import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
  post: null,
  user: null,
  users: null,
  orders: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setEditAdmin(state, action) {
      state.edit = action.payload;
    },
    addPost(state, action) {
      state.post = action.payload;
    },
    addUsers(state, action) {
      const data = [];
      action.payload.map((el) =>
        data.push({
          id: el._id,
          name: el.name,
          email: el.email,
          date: el.date,
        })
      );
      state.users = data;
    },
    addUser(state, action) {
      state.user = action.payload;
    },
    addOrders(state, action) {
      state.orders = action.payload;
    },
    clearData(state, action) {
      state.post = null;
      state.user = null;
    },
  },
});

export const {
  setEditAdmin,
  addPost,
  addUsers,
  addUser,
  clearData,
  addOrders,
} = adminSlice.actions;

export default adminSlice.reducer;
