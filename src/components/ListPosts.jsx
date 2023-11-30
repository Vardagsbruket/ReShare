import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import { useEffect, useState } from "react";

export const ListPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  let postList = useSelector((state) => state.posts.postsList);
  const category = useSelector((state) => state.posts.selectedCategory);
  useEffect(() => {
    if (category !== "all") {
      postList = postList.filter((post) => post.category === category);
      setFilteredPosts(postList);
    } else {
      setFilteredPosts(postList);
    }
  }, [category, postList]);

  return (
    <>
      {filteredPosts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </>
  );
};
