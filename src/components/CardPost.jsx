import { Link } from "react-router-dom";
import "./CardPost.css";

export const CardPost = ({ post }) => {
  return (
    <>
      <div className="cardPost">
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
