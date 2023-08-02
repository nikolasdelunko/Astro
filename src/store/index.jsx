import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import storySlice from "./story";
import blogSlice from "./blog";
import checkoutSlice from "./checkout";
import userSlice from "./user";
import adminSlice from "./admin";
import stickersSlice from "./stickers";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    story: storySlice,
    blog: blogSlice,
    user: userSlice,
    checkout: checkoutSlice,
    admin: adminSlice,
    stickers: stickersSlice,
  },
});
