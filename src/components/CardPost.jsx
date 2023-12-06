import { Link } from "react-router-dom";
import "./CardPost.css";
import clothes from "../assets/clothes_1x.webp"
import furniture from "../assets/furniture_1x.webp"
import garden from "../assets/garden_1x.webp"
import kitchen from "../assets/kitchen_1x.webp"
import other from "../assets/other_1x.webp"
import sports from "../assets/sports_1x.webp"
import tools from "../assets/tools_1x.webp"
import vehicles from "../assets/vehicles_1x.webp"
import interior from "../assets/interior_1x.webp"
import toys from "../assets/toys_1x.webp"

export const CardPost = ({ post }) => {
 
  let imgPlaceHolder = '';

  switch (post.category) {
    case 'Vehicles':
      imgPlaceHolder = vehicles;
      break;
    case 'Furniture':
        imgPlaceHolder = furniture;
        break;
    case 'Toys':
        imgPlaceHolder = toys;
        break;
    case 'clothes & shoes':
        imgPlaceHolder = clothes;
        break;
    case 'Tools & machines':
        imgPlaceHolder = tools;
        break;
    case 'interior':
        imgPlaceHolder = interior;
        break;
    case 'Sports & hobby':
        imgPlaceHolder = sports;
        break;
    case 'Kitchen appliances':
      imgPlaceHolder = kitchen;
      break;
    case 'Garden':
      imgPlaceHolder = garden;
      break;
    case 'Other':
      imgPlaceHolder = other;
      break;
  }

  console.log(post.category);

  return (
    <>
      <div className={`cardPost ${post.type}`}>
        <div>
          <Link to={`/post/${post._id}`}>
            <img src={imgPlaceHolder}/>
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
