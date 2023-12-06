import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FacebookShareButton, FacebookIcon } from "react-share";
import "./DetailPage.css";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { CreatePostBanner } from "../components/CreatePostBanner";

import clothes from "../assets/clothes_1x.webp";
import furniture from "../assets/furniture_1x.webp";
import garden from "../assets/garden_1x.webp";
import kitchen from "../assets/kitchen_1x.webp";
import other from "../assets/other_1x.webp";
import sports from "../assets/sports_1x.webp";
import tools from "../assets/tools_1x.webp";
import vehicles from "../assets/vehicles_1x.webp";
import interior from "../assets/interior_1x.webp";
import toys from "../assets/toys_1x.webp";

export const DetailPage = () => {
  const isNewPostCreated = useSelector((state) => state.posts.isNewPostCreated);
  const dispatch = useDispatch();

  const [isFetched, setIsFetched] = useState(false);

  const [post, setPost] = useState(null);

  const { postId } = useParams();
  const postList = useSelector((state) => state.posts.postsList);

  useEffect(() => {
    // Reset isNewPostCreated to false after it has been used
    if (isNewPostCreated) {
      dispatch(setNewPostCreated(false));
    }
  }, [dispatch, isNewPostCreated]);

  useEffect(() => {
    const fetchList = async () => {
      setIsFetched(false);
      const foundPost = await postList.find((post) => post._id === postId);
      setPost(foundPost);
      setIsFetched(true);
      console.log("created date:", post.createdDate);
    };

    fetchList();
  }, [postId, postList]);

  let imgPlaceHolder = "";
  switch (post?.category) {
    case "Vehicles":
      imgPlaceHolder = vehicles;
      break;
    case "Furniture":
      imgPlaceHolder = furniture;
      break;
    case "Toys":
      imgPlaceHolder = toys;
      break;
    case "Clothes & shoes":
      imgPlaceHolder = clothes;
      break;
    case "Tools & machines":
      imgPlaceHolder = tools;
      break;
    case "Interior":
      imgPlaceHolder = interior;
      break;
    case "Sports & hobby":
      imgPlaceHolder = sports;
      break;
    case "Kitchen appliances":
      imgPlaceHolder = kitchen;
      break;
    case "Garden":
      imgPlaceHolder = garden;
      break;
    case "Other":
      imgPlaceHolder = other;
      break;
    default:
      imgPlaceHolder = other;
  }

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
              <div className="img-container">
                <img src={imgPlaceHolder} alt="" />
              </div>
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
              <h3>Working to display your post...</h3>
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
