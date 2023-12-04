import { useSelector } from "react-redux";
import "./Header.css";
import { NavLink } from "react-router-dom";


export const Header = () => {
  const isLoggedIn = useSelector((state) => state.posts.isLoggedIn);
  console.log("login flag",isLoggedIn);
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
         {isLoggedIn && (<li>
              <NavLink to="/login" className="navLink">
                Logout
              </NavLink>
            </li>)}
            {!isLoggedIn && (<li>
              <NavLink to="/login" className="navLink">
                Login
              </NavLink>
            </li>)}
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
            <li>
              <NavLink to="/about" className="navLink">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
