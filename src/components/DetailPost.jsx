import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import { FacebookShareButton, FacebookIcon } from "react-share";

export const DetailPost = () => {
  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);
  const post = postList.find((post) => post.id === parseInt(postId));
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
        {/* <div>
          <FacebookShareButton url={`/post/${post.id}/`}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div> */}
      </div>
    </>
  );
};
