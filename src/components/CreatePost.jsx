import { useState } from "react";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import { setNewPostCreated, getPostsList } from "../reducers/postSlice";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [CreateNewPostSuccess, setCreateNewPostSuccess] = useState(false);
  const categoryList = useSelector((state) => state.posts.categoryList);
  const cityList = useSelector((state) => state.posts.cityList);
  //   const [image, setImage] = useState(null);

  const createNewPost = async () => {
      try {
        const response = await fetch("http://localhost:6001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            createdDate: new Date().getTime(),
            postTitle: title,
            description: description,
            contactInfo: contact,
            type: type,
            city: city,
            category: category,
          }),
        });
    
        if (response.ok) {
          const createdPost = await response.json(); // Assuming the server returns the created post data
          // checking if the a post was newly created
          setCreateNewPostSuccess(true);
          console.log("New post created:", createdPost);

          dispatch(setNewPostCreated(true));
          // Redirect to the page of the newly created post
          redirect(`/post/${createdPost.id}`);
        }
      
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      createdDate: new Date().getTime(),
      postTitle: title,
      description: description,
      contactInfo: contact,
      type: type,
      city: city,
      category: category,
      //img: image,
    };
    createNewPost();

    dispatch(getPostsList());
  };

  return (
    <form className="create-post-form" onSubmit={handleFormSubmit}>
      <label htmlFor="postTitle">Title for product:</label>
      <input
        type="text"
        id="postTitle"
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label htmlFor="contactInfo">Contact:</label>
      <input
        type="text"
        id="contactInfo"
        onChange={(e) => setContact(e.target.value)}
      ></input>

      <label htmlFor="type">Borrow, lend or give away?</label>
      <select id="type" onChange={(e) => setType(e.target.value)}>
        <option value="">choose one type</option>
        <option value="Needed">Needed</option>
        <option value="Available">Available</option>
        <option value="Give away">Give away</option>
      </select>

      <label htmlFor="category">Categories</label>
      <select id="category" onChange={(e) => setCategory(e.target.value)}>
        {categoryList.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
      <label htmlFor="category">Select city</label>
      <select id="category" onChange={(e) => setCity(e.target.value)}>
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