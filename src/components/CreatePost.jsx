import { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewPostCreated,
  getPostsList,
  createNewPost,
} from "../reducers/postSlice";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const initialState = {
    postTitle: "",
    description: "",
    contactInfo: null,
    category: "",
    type: "",
    city: "",
    createdDate: null,
  };

  const [newPost, setNewPost] = useState(initialState);
  const categoryList = useSelector((state) => state.posts.categoryList);
  const cityList = useSelector((state) => state.posts.cityList);
  const [CreateNewPostSuccess, setCreateNewPostSuccess] = useState(false);

  const handleChange = (key, value) => {
    setNewPost({ ...newPost, [key]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setNewPost((prev) => ({ ...prev, createdDate: new Date().getTime() }));
    await createNewPost();
    setNewPost((prevState) => ({ ...prevState, ...initialState }));
    console.log("....", newPost);
    dispatch(getPostsList());

    //
    // const handleFormSubmit = async (e) => {
    //   e.preventDefault();

    //   const newPost = {
    //     createdDate: new Date().getTime(),
    //     postTitle: title,
    //     description: description,
    //     contactInfo: contact,
    //     type: type,
    //     city: city,
    //     category: category,
    //   };
    const createdPost = await dispatch(await createNewPost(newPost));
    setCreateNewPostSuccess(true);
    dispatch(setNewPostCreated(true));
    // Redirect to the page of the newly created post
    console.log("Handle form submit:", createdPost);
    // dispatch(getPostsList());
    redirect(`/post/${createdPost.payload._id}`);
  };

  return (
    <form className="create-post-form" onSubmit={handleFormSubmit}>
      <label htmlFor="postTitle">Title for product:</label>
      <input
        type="text"
        id="postTitle"
        required
        onChange={(e) => handleChange("postTitle", e.target.value)}
      ></input>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={(e) => handleChange("description", e.target.value)}
      ></textarea>

      <label htmlFor="contactInfo">Contact:</label>
      <input
        type="text"
        id="contactInfo"
        required
        onChange={(e) => handleChange("contactInfo", e.target.value)}
      ></input>

      <label htmlFor="type">Borrow, lend or give away?</label>
      <select
        id="type"
        required
        onChange={(e) => handleChange("type", e.target.value)}
      >
        <option value="">choose one type</option>
        <option value="Needed">Needed</option>
        <option value="Available">Available</option>
        <option value="Give away">Give away</option>
      </select>

      <label htmlFor="category">Categories</label>
      <select
        id="category"
        required
        onChange={(e) => handleChange("category", e.target.value)}
      >
        <option value="">choose category</option>
        {categoryList.slice(1).map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
      <label htmlFor="category">Select city</label>
      <select
        id="category"
        required
        onChange={(e) => handleChange("city", e.target.value)}
      >
        <option value="">Select city</option>
        {cityList.slice(1).map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
      {/* { <label htmlFor="image">Upload Image:</label>
      <input type="file" id="image" onChange={(e)=> setImage(e.target.files[0])} /> */}
      <input type="submit" value="Create post" />
    </form>
  );
};
