import { useState } from "react";
import "./CreatePost.css";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  //   const [image, setImage] = useState(null);

  const createNewPost = async () => {
    try {
      await fetch("http://localhost:6001/posts", {
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
          city: "Örebro",
          category: category,
          //   img:image
        }),
      });

      console.log("New post created");
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
      city: "Örebro",
      category: category,
      //img: image,
    };
    createNewPost();
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
        <option value="Borrow">Borrow</option>
        <option value="Lender">Lender</option>
        <option value="Give away">Give away</option>
      </select>

      <label htmlFor="category">Categories</label>
      <select id="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Vechicles">Vechicles</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothes & shoes">Clothes & shoes</option>
      </select>
      {/* { <label htmlFor="image">Upload Image:</label>
      <input type="file" id="image" onChange={(e)=> setImage(e.target.files[0])} /> */}
      <input type="submit" value="Create post" />
    </form>
  );
};
