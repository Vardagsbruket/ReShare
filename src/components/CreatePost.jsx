import { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { getPostsList } from "../reducers/postSlice";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const initialState = {
    postTitle: "",
    description: "",
    contactInfo: null,
    category: "",
    type: "",
    city: "",
    createdDate:null
  };
  
  const [newPost,setNewPost] = useState(initialState);
  const categoryList = useSelector((state) => state.posts.categoryList);
  const cityList = useSelector((state) => state.posts.cityList);
  //   const [image, setImage] = useState(null);

  const createNewPost = async () => {
    // try {
    //   await fetch("http://localhost:6001/posts", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       createdDate: new Date().getTime(),
    //       postTitle: title,
    //       description: description,
    //       contactInfo: contact,
    //       type: type,
    //       city: city,
    //       category: category,
    //       //   img:image
    //     }),
    //   });
    try {
      const url = "/.netlify/functions/create_post";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          newPost
        ),
      });

      const data = await response.json();
      console.log(data);
      console.log("New post created");
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };
  const handleChange = (key, value) => {
    setNewPost({ ...newPost, [key]: value });
  };
  

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setNewPost((prev) => ({ ...prev, createdDate: new Date().getTime() }));
    await createNewPost();
    setNewPost(prevState => ({ ...prevState, ...initialState }));
    console.log("....", newPost);
    dispatch(getPostsList());
  };

  return (
    <form className="create-post-form" onSubmit={handleFormSubmit}>
      <label htmlFor="postTitle">Title for product:</label>
      <input
        type="text"
        id="postTitle"
        onChange={(e) => handleChange("postTitle",e.target.value)}
      ></input>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={(e) => handleChange("description",e.target.value)}
      ></textarea>

      <label htmlFor="contactInfo">Contact:</label>
      <input
        type="text"
        id="contactInfo"
        onChange={(e) => handleChange("contactInfo",e.target.value)}
      ></input>

      <label htmlFor="type">Borrow, lend or give away?</label>
      <select id="type" onChange={(e) => handleChange("type",e.target.value)}>
      <option value="">choose one type</option>
        <option value="Needed">Needed</option>
        <option value="Available">Available</option>
        <option value="Give away">Give away</option>
      </select>

      <label htmlFor="category">Categories</label>
      <select id="category" onChange={(e) => handleChange("category",e.target.value)}>
        {categoryList.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
      <label htmlFor="category">Select city</label>
      <select id="category" onChange={(e) => handleChange("city",e.target.value)}>
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
