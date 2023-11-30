import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const DetailPost = () => {
  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);
  const post = postList.find((post) => post.id === postId);
  console.log("post id:", postId);
  console.log("post found", post);
  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <h2>{post.postTitle}</h2>
            <p>
              {post.type} - {post.category}
            </p>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
};
