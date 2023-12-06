import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cityList: [
    "All",
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
    "Kiruna",
  ],
  categoryList: [
    "All",
    "Vehicles",
    "Furniture",
    "Toys",
    "Clothes & shoes",
    "Tools & machines",
    "Interior",
    "Sports & hobby",
    "Kitchen appliances",
    "Garden",
    "Other",
  ],
  postsList: [
    
  ],

  selectedCategory: "All",
  selectedType: "All",
  selectedCity: "All",
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

export const createNewPost = createAsyncThunk(
  "posts/createPost",
  async (payload, thunkAPI) => {
    try {
      const url = "/.netlify/functions/create_post";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json(); // Assuming the server returns the created post data
        payload._id = data.insertedId;
        // checking if the a post was newly created
      }
      console.log("In the slice:", payload);
      return payload;
    } catch (error) {
      console.error("Error creating new post:", error);
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
    setCity: (state, action) => {
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
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.postsList.push(action.payload);
        console.log("Created post extra reducer:", action.payload);
      });
  },
});
export const { setCategory, setType, setCity, setNewPostCreated } =
  posts.actions;
export default posts.reducer;
