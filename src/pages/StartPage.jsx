import React, { useEffect } from "react";
import { useSelector } from "react-redux";


export const StartPage = () => {
  

  const postList = useSelector((state) => state.posts.postsList);
  console.log(postList);
  return <div>Start Page</div>;
};
