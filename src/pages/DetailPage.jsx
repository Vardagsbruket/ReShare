import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./DetailPage.css";
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
    //console.log("isNewPostCreated:", isNewPostCreated); // Add this log to see the value
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
        <NavLink to={-1} className="go-back">
          Go Back
        </NavLink>
        {isNewPostCreated && <CreatePostBanner />}
        {isFetched ? (
          post && post._id ? (
            <div className="detail-flex-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUDvACls89tR8w9E3DL8FQV_-lK42f3-Gww&usqp=CAU"
                alt=""
                className="detail-image"
              />

              <div className="detail-post-wrapper">
                <p className="type">{post.type}</p>
                <h2 className="title">{post.postTitle}</h2>
                <p className="medium-text">
                  {post.category} | {post.city}
                </p>
                <div className="detail-text-container">
                  <p className="small-text">{post.description}</p>
                  <p className="medium-text">Contact</p>
                  <p className="small-text">{post.contactInfo}</p>
                  <p className="medium-text">Creation date</p>
                  <p className="small-text">{post.createdDate}</p>
                  <div>
                    <FacebookShareButton
                      url={`https://stirring-florentine-c4bb3f.netlify.app/post/${post._id}`}
                      className="facebook"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="noPosts">
              <h3>This post does not exist</h3>
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
