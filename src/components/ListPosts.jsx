import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import { useEffect, useState } from "react";
import "./Listposts.css";

export const ListPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postList = useSelector((state) => state.posts.postsList);
  const category = useSelector((state) => state.posts.selectedCategory);
  const type = useSelector((state) => state.posts.selectedType);
  const city = useSelector((state) => state.posts.selectedCity);

  useEffect(() => {
    const filterFunction = (post) => {
      return (
        (category === "all" || post.category === category) &&
        (type === "all" || post.type === type) &&
        (city === "all" || post.city === city)
      );
    };

    const allfilteredPosts = postList.filter(filterFunction);
    setFilteredPosts(allfilteredPosts);
  }, [category, type, city, postList]);

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
