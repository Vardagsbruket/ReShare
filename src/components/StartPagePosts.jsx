import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import "./Listposts.css";
import "./StartPagePosts.css";
import { useEffect, useState } from "react";

export const StartPagePosts = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postList = useSelector((state) => state.posts.postsList);
  const selectedCity = useSelector((state) => state.posts.selectedCity);

  useEffect(() => {
    let allfilteredPosts;
    if (selectedCity !== "All") {
      allfilteredPosts = postList?.filter(
        (post) => post.type === "Needed" && post.city === selectedCity
      );
    } else {
      allfilteredPosts = postList?.filter((post) => post.type === "Needed");
    }
    setFilteredPosts(allfilteredPosts);
  }, [selectedCity, postList]);

  return (
    <>
      <section className="list-post-container startpage-list-post-container">
        {filteredPosts
          .reverse()
          .slice(0, 7)
          .map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
      </section>
    </>
  );
};
