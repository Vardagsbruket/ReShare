import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cityList:[
    "all",
    "Stockholm",
    "Göteborg",
    "Kista",
    "Malmö",
    "Uppsala",
    "Linköping",
    "Lund",
    "Västerås",
    "Örebro",
    "Helsingborg",
    "Kiruna"
  ],
  categoryList: [
    "all",
    "Vehicles",
    "Furniture",
    "Toys",
    "clothes & shoes",
    "Tools & machines",
    "interior",
    "Sports & hobby",
    "Kitchen appliances",
    "Garden",
    "Other",
  ],
  postsList: [],
  selectedCategory: "all",
  selectedType: "all",
  selectedCity: "all",
  isLoading: false,
};
export const getPostsList = createAsyncThunk(
  "posts/getPostsList",
  async (payload, thunkAPI) => {
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
  }
);

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setType: (state, action) => {
      state.selectedType = action.payload;
    },
    setCity : (state,action) => {
      state.selectedCity = action.payload;
    },
    setNewPostCreated: (state, action) => {
      console.log("isNewPostCreated set to:", action.payload);
      state.isNewPostCreated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsList.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("in extra reducer", action.payload);
        state.postsList = action.payload;
      })
      .addCase(getPostsList.rejected, (state, action) => {
        // If an error occurs during the asynchronous operation (rejected state), this case logs information about the action (which may include an error message) to the console. It then sets isLoading to false
        console.log(action);
        state.isLoading = false;
      });
  },
});
export const { setCategory, setType,setCity, setNewPostCreated } = posts.actions;
export default posts.reducer;
