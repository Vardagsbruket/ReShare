import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <NavLink to="/" className="navLink">
            <h1>ReShare</h1>
          </NavLink>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <NavLink to="/browse-posts" className="navLink">
                Browse Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-post" className="navLink">
                Create Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
