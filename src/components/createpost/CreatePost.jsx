import { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewPostCreated,
  getPostsList,
  createNewPost,
} from "../../reducers/postSlice";
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
    createdDate: new Date().getTime(),
  };

  const [newPost, setNewPost] = useState(initialState);
  const categoryList = useSelector((state) => state.posts.categoryList);
  const cityList = useSelector((state) => state.posts.cityList);
  const [CreateNewPostSuccess, setCreateNewPostSuccess] = useState(false);

  // const handleChange = (key, value) => {
  //   setNewPost({ ...newPost, [key]: value });
  // };

  const handleChange = (key, value) => {
    if (key === "createdDate") {
      setNewPost({ ...newPost, createdDate: value });
    } else {
      setNewPost({ ...newPost, [key]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().getTime();

    handleChange("createdDate", currentDate);

    // setNewPost((prev) => ({ ...prev, createdDate: currentDate }));

    // setNewPost((prevState) => ({ ...prevState, ...initialState }));
    const createdPost = await dispatch(await createNewPost(newPost));
    dispatch(getPostsList());
    setCreateNewPostSuccess(true);
    dispatch(setNewPostCreated(true));
    redirect(`/post/${createdPost.payload._id}`);
  };

  return (
    <form className="create-post-form" onSubmit={handleFormSubmit}>
      <label htmlFor="postTitle">Title for post:</label>
      <input
        type="text"
        id="postTitle"
        required
        onChange={(e) => handleChange("postTitle", e.target.value)}
      ></input>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        required
        placeholder="Write a description..."
        onChange={(e) => handleChange("description", e.target.value)}
      ></textarea>

      <label htmlFor="contactInfo">Contact:</label>
      <input
        type="text"
        required
        id="contactInfo"
        onChange={(e) => handleChange("contactInfo", e.target.value)}
      ></input>

      <label htmlFor="type">Borrow, lend or give away?</label>
      <select
        id="type"
        required
        onChange={(e) => handleChange("type", e.target.value)}
      >
        <option value="" disabled selected>
          Choose one type
        </option>
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
        <option value="" disabled selected>
          Choose category
        </option>
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
        <option value="" disabled selected>
          Choose a city
        </option>
        {cityList.slice(1).map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
      <input type="submit" value="Create post" className="submit" />
    </form>
  );
};
