import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <NavLink to="/" className="logo">
            <h1>ReShare</h1>
          </NavLink>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <NavLink to="/about" className="about">
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
