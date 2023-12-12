import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Menu from "../../assets/icons/menu-icon.svg";

export const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  const closeNavigation = () => {
    if (showNavigation) {
      setShowNavigation(false);
    }
  };

  return (
    <>
      <div className="header">
        <div>
          <NavLink to="/" className="logo" onClick={closeNavigation}>
            <h1>ReShare</h1>
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleNavigation}>
          <img src={Menu} alt="Menu" />
        </div>
        <div className={`navBar ${showNavigation && "sidebar"}`}>
          <ul>
            <li>
              <NavLink
                to="/about"
                className="about-link"
                onClick={closeNavigation}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-posts"
                className="browse"
                onClick={closeNavigation}
              >
                Browse Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-post"
                className="create"
                onClick={closeNavigation}
              >
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
