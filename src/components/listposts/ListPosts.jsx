import { useSelector } from "react-redux";
import { CardPost } from "../cardpost/CardPost";
import { useEffect, useState } from "react";
import "./Listposts.css";
import { Loading } from "../loading/Loading";

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

    const allFilteredPosts = postList.filter(filterFunction);

    const sortedPosts = [...allFilteredPosts].sort(
      (a, b) => b.createdDate - a.createdDate
    );

    setFilteredPosts(sortedPosts);
  }, [category, type, city, postList]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : filteredPosts.length === 0 ? (
        <div className="noPosts">
          <h3>There are no posts to display.</h3>
        </div>
      ) : (
        <section className="list-post-container">
          {filteredPosts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </section>
      )}
    </>
  );
};
