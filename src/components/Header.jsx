import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Menu from "../assets/icons/menu-icon.svg";

export const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };
  return (
    <>
      <div className="header">
        <div>
          <NavLink to="/" className="logo">
            <h1>ReShare</h1>
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleNavigation}>
          <img src={Menu} />
        </div>
        <div className={`navBar ${showNavigation && "sidebar"}`}>
          <ul>
            <li>
              <NavLink to="/about" className="about-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/browse-posts" className="browse">
                Browse Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-post" className="create">
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
