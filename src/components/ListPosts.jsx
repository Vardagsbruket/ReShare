import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import { useEffect, useState } from "react";
import "./Listposts.css";
import { Loading } from "./Loading";

export const ListPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postList = useSelector((state) => state.posts.postsList);
  const category = useSelector((state) => state.posts.selectedCategory);
  const type = useSelector((state) => state.posts.selectedType);
  const city = useSelector((state) => state.posts.selectedCity);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    const filterFunction = (post) => {
      return (
        (category === "All" || post.category === category) &&
        (type === "All" || post.type === type) &&
        (city === "All" || post.city === city)
      );
    };

    const allfilteredPosts = postList.filter(filterFunction);
    setFilteredPosts(allfilteredPosts);
  }, [category, type, city, postList]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="list-post-container">
          {filteredPosts.length === 0 ? (
            <p className="noPosts">No posts to display</p>
          ) : (
            filteredPosts.map((post) => <CardPost key={post.id} post={post} />)
          )}
        </section>
      )}
    </>
  );
};
