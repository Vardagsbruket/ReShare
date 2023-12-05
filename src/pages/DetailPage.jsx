import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { getPostsList } from "../reducers/postSlice";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { setNewPostCreated } from "../reducers/postSlice";
import { CreatePostBanner } from "../components/CreatePostBanner";



export const DetailPage = () => {
  const dispatch = useDispatch();
  const isNewPostCreated = useSelector((state) => state.posts.isNewPostCreated);

  const [isFetched, setIsFetched] = useState(false);

  const [post, setPost] = useState(null);

  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);

  

  useEffect(() => {
    console.log("isNewPostCreated:", isNewPostCreated); // Add this log to see the value
    if (isNewPostCreated) {
      console.log("Banner should be displayed!");

    }
  }, [isNewPostCreated, dispatch]);

  useEffect(() => {
    const fetchList = async () => {
      setIsFetched(false);
      const foundPost = await postList.find((post) => post._id === postId);
      setPost(foundPost);
      setIsFetched(true);
    };

    fetchList();
  }, [postId, postList]);

  return (
    <>
      <div className="detail-post-container">
        <NavLink to={-1}>
          <button>Go Back</button>
        </NavLink>
        {isNewPostCreated && <CreatePostBanner />}
        {isFetched ? (
          post && post._id ? (
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
          ) : (
            <div className="noPosts">
              <p>This post does not exist</p>
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
