import { Link } from "react-router-dom";
import "./CardPost.css";

export const CardPost = ({ post }) => {
  return (
    <>
      <div className={`cardPost ${post.type}`}>
        <div>
          <Link to={`/post/${post._id}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUDvACls89tR8w9E3DL8FQV_-lK42f3-Gww&usqp=CAU"
              alt="image of shoes"
            />
            <div className="card-text">
              <h2 className="post-title">{post.postTitle}</h2>
              <h3 className="post-city">{post.city}</h3>
              <p className="post-type-category">
                {post.type} - {post.category}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
