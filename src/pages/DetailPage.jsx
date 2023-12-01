import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FacebookShareButton, FacebookIcon } from "react-share";

export const DetailPage = () => {
  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);
  const post = postList.find((post) => post.id === parseInt(postId));
  console.log("post id:", postId);
  console.log("post found", post);
  return (
    <>
      <div className="detail-post-container">
        <NavLink to={-1}>
          <button>Go Back</button>
        </NavLink>
        <div>
          <img src="" alt="" />
          <div className="detail-post-wrapper">
            <p>{post.type}</p>
            <h2>{post.postTitle}</h2>
            <p>{post.category}</p>
            <div>
              <p>{post.description}</p>
              <p>{post.city}</p>
              <p>{post.contactInfo}</p>
              <p>{post.createdDate}</p>
            </div>
            <div>
              <FacebookShareButton url={`/post/${postId}/`}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
};
