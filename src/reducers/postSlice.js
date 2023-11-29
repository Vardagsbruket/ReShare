import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
  isLoading : false
};
export const getPostsList = createAsyncThunk("posts/getPostsList", async (payload, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:6001/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});



const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.postsList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // When the getCartItems thunk is in a pending state (meaning the asynchronous operation is ongoing), this case sets the isLoading state to true to indicate that the data is currently being fetched.
      .addCase(getPostsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsList.fulfilled, (state, action) => {
       
        state.isLoading = false;
        console.log("in extra reducer",action.payload);
        state.postsList = action.payload;
      })
      .addCase(getPostsList.rejected, (state, action) => {
        // If an error occurs during the asynchronous operation (rejected state), this case logs information about the action (which may include an error message) to the console. It then sets isLoading to false
        console.log(action);
        state.isLoading = false;
      });
 
  },
});
export const { createPost } = posts.actions;
export default posts.reducer;
