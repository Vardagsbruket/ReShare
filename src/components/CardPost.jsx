import { Link } from "react-router-dom";

export const CardPost = ({ post }) => {
  return (
    <>
      <div>
        <div>
          <Link to={`/post/${post.id}`}>
            <img src="" alt="" />
            <div>
              <h2>{post.postTitle}</h2>
              <p>
                {post.type} - {post.category}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
