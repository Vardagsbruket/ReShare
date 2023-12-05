import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import "./Listposts.css";
import { useEffect, useState } from "react";

export const StartPagePosts = () => {
  const [filteredPosts,setFilteredPosts] = useState([]);
  const postList = useSelector((state) => state.posts.postsList);
  const selectedCity = useSelector((state) => state.posts.selectedCity);


  useEffect(() => {
    let allfilteredPosts;
    if(selectedCity !== "all")
    {
      allfilteredPosts = postList?.filter((post) => post.type === "Needed" && post.city === selectedCity);
    }
    else {
      allfilteredPosts = postList?.filter((post) => post.type === "Needed");
    }
    setFilteredPosts(allfilteredPosts);
  },[selectedCity,postList]);


  return (
    <>
      <section className="list-post-container">

        {filteredPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};
