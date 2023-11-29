import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.postsList.push(action.payload);
    },
  },
});
export const { createPost } = posts.actions;
export default posts.reducer;
