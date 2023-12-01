import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import { useEffect, useState } from "react";
import "./Listposts.css";

export const ListPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postList = useSelector((state) => state.posts.postsList);
  const category = useSelector((state) => state.posts.selectedCategory);
  const type = useSelector((state) => state.posts.selectedType);
  

  useEffect(() => {
    let allfilteredPosts;

    if (category !== "all" && type === "all") {
      allfilteredPosts = postList.filter((post) => post.category === category);
      setFilteredPosts(allfilteredPosts);
    } else if (type !== "all" && category === "all") {
      allfilteredPosts = postList.filter((post) => post.type === type);
      setFilteredPosts(allfilteredPosts);
    } else if (category !== "all" && type !== "all") {
      allfilteredPosts = postList.filter(
        (post) => post.category === category && post.type === type
      );
      setFilteredPosts(allfilteredPosts);
    } else {
      setFilteredPosts(postList);
    }
  }, [category, type, postList]);

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
