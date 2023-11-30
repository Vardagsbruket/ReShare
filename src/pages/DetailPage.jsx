import React from "react";
import { DetailPost } from "../components/DetailPost";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const DetailPage = () => {
  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);
  const post = postList.find((post) => post.id === parseInt(postId));
  console.log("post id:", postId);
  console.log("post found", post);
  return (
    <>
      <div>
        <NavLink to={-1}>
          <button>Go Back</button>
        </NavLink>
        <div>
          <img src="" alt="" />
          <div>
            <p>{post.type}</p>
            <h2>{post.postTitle}</h2>
            <p>{post.category}</p>
            <div>
              <p>{post.description}</p>
              <p>{post.city}</p>
              <p>{post.contactInfo}</p>
              <p>{post.createdDate}</p>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
};
