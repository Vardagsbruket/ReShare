import { useSelector } from "react-redux";
import { CardPost } from "../cardpost/CardPost";
import "../listposts/Listposts.css";
import "./StartPageListPosts.css";
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
    const sortedPosts = [...allfilteredPosts].sort(
      (a, b) => b.createdDate - a.createdDate
    );
    setFilteredPosts(sortedPosts);
  }, [selectedCity, postList]);

  return (
    <>
      <section className="list-post-container startpage-list-post-container">
        {filteredPosts.slice(0, 7).map((post) => (
          <CardPost key={post._id} post={post} />
        ))}
      </section>
    </>
  );
};
