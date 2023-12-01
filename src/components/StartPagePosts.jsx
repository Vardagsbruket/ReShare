import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";
import "./Listposts.css";

export const StartPagePosts = () => {
  const postList = useSelector((state) => state.posts.postsList);
  const allfilteredPosts = postList.filter((post) => post.type === "Needed");

  return (
    <>
      <section className="list-post-container">
        {allfilteredPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};
