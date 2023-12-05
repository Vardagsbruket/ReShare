import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [post, setPost] = useState(null);

  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);

  useEffect(() => {
    const fetchList = async () => {
      setIsFetched(false);
      // const foundPost = await postList.find((post) => post._id === postId);
      const foundPost = await postList.find((post) => post.id === postId);
      setPost(foundPost);
      setIsFetched(true);
    };

    fetchList();
  }, [postId, postList]);

  if(post)
  console.log("post",post);
  return (
    <>
      <div className="detail-post-container">
        <NavLink to={-1}>
          <button>Go Back</button>
        </NavLink>
        {isFetched && post && (
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
            </div>
          </div>
        )}
        <p></p>
      </div>
    </>
  );
};
