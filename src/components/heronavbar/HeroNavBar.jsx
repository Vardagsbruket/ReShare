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
          <div className="navLink-div">
            <NavLink
              to="/browse-posts"
              //   onClick={handleClickFurniture}
              className="navlink"
            >
              <li onClick={() => handleClick("Furniture")}>
                <img src={furniture} alt="funiture" /> Furniture
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Vehicles")}>
                <img src={vehicles} alt="vehicle" />
                Vehicles
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Clothes & shoes")}>
                <img src={clothes} alt="clothes-shoes" />
                Clothes & <br />
                Shoes
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Tools & machines")}>
                <img src={tools} alt="tools-machine" />
                Tools & <br />
                machines
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Interior")}>
                <img src={interior} alt="interior" />
                Interior
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Sports & hobby")}>
                <img src={sports} alt="sports-hobby" />
                Sports & <br />
                Hobby
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Kitchen appliances")}>
                <img src={kitchen} alt="kitchen" />
                Kitchen
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Garden")}>
                <img src={garden} alt="garden" />
                Garden
              </li>
            </NavLink>
          </div>
          <div className="navLink-div">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("Other")}>
                <img src={other} alt="other" />
                Other
              </li>
            </NavLink>
          </div>
          <div className="navLink-div" id="last">
            <NavLink to="/browse-posts" className="navlink">
              <li onClick={() => handleClick("All")}>
                <img src={arrowright} alt="see-all" />
                See all
              </li>
            </NavLink>
          </div>
        </ul>
      </nav>
    </section>
  );
};
