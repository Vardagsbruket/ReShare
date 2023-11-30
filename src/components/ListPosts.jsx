import { useSelector } from "react-redux";
import { CardPost } from "./CardPost";

export const ListPosts = () => {
  const postList = useSelector((state) => state.posts.postsList);
  return (
    <>
      {postList?.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </>
  );
};
