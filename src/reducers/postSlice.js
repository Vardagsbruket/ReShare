import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
postsList : [
    {
       createdDate: 888898,
        postTitle: "Best tool ever",
        description: "Super duper good thing",
        contactInfo: "Call me here",
        city: "Stockholm",
        type: "Available",
        category: "Tools",
        img: "",
    },
    {
        createdDate: 83444898,
         postTitle: "clothes here ",
         description: "Clothes in good condition",
         contactInfo: "Call me here",
         city: "uppsala",
         type: "Available",
         category: "cloths",
         img: "",
     },
     {
        createdDate: 448898,
         postTitle: "car to be borrowed",
         description: "I need a car for few hours",
         contactInfo: "Call me here",
         city: "Knivsta",
         type: "Needed",
         category: "Vehicle",
         img: "",
     },
],
 
}

const posts = createSlice({
    name: "posts",
    initialState,
    reducers: {
        createPost:(state,action) => {
            state.postsList.push(action.payload);
           
        }

    }
})
export const {createPost} = posts.actions;
export default posts.reducer