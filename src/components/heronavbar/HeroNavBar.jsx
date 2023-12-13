import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../reducers/postSlice";
import "./HeroNavBar.css";
import furniture from "../../assets/icons/furniture-icon.svg";
import vehicles from "../../assets/icons/vehicles-icon.svg";
import clothes from "../../assets/icons/clothes-icon.svg";
import garden from "../../assets/icons/garden-icon.svg";
import kitchen from "../../assets/icons/kitchen-icon.svg";
import interior from "../../assets/icons/interior-icon.svg";
import other from "../../assets/icons/other-icon.svg";
import arrowright from "../../assets/icons/arrow-circle-right-icon.svg";
import tools from "../../assets/icons/tools-icon.svg";
import sports from "../../assets/icons/sports-icon.svg";

export const HeroNavBar = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setCategory(value));
  };
  return (
    <section className="hero-navbar-container">
      <nav className="hero-navbar">
        <ul>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Furniture")}
              >
                <img src={furniture} alt="image of sofa" />{" "}
                <span>Furniture</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Vehicles")}
              >
                <img src={vehicles} alt="image of car" />
                <span>Vehicles</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Clothes & shoes")}
              >
                <img src={clothes} alt="image of sweater" />
                Clothes & <br />
                Shoes
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Tools & machines")}
              >
                <img src={tools} alt="image of screwdriver" />
                <span>
                  Tools & <br />
                  machines
                </span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Interior")}
              >
                <img src={interior} alt="image of house" />
                <span>Interior</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Sports & hobby")}
              >
                <img src={sports} alt="image of football" />
                <span>
                  Sports & <br />
                  Hobby
                </span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Kitchen appliances")}
              >
                <img src={kitchen} alt="image of plate and fork" />
                <span> Kitchen</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Garden")}
              >
                <img src={garden} alt="image of flower" />
                <span>Garden</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("Other")}
              >
                <img src={other} alt="image displaying three dots" />
                <span> Other </span>
              </NavLink>
            </div>
          </li>
          <li id="last">
            <div className="navLink-div">
              <NavLink
                to="/browse-posts"
                className="navlink"
                onClick={() => handleClick("All")}
              >
                <img src={arrowright} alt="image of arrow pointing right" />
                <span> See all </span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
};
