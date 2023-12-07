import { NavLink } from "react-router-dom";
import "./HeroNavBar.css";
export const HeroNavBar = () => {
  return (
    <section className="hero-navbar-container">
      <nav className="hero-navbar">
        <ul>
          <NavLink
            to="/browse-posts"
            //   onClick={handleClickFurniture}
            className="navlink"
          >
            <li>Furniture</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Vehicles</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Clothes & Shoes</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Tools & machines</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Interior</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Sports & Hobby</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Kitchen</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Garden</li>
          </NavLink>
          <NavLink className="navlink">
            <li>Other</li>
          </NavLink>
          <NavLink className="navlink">
            <li>See all</li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};
