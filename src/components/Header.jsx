import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>
        <div>
          <NavLink to="/">ReShare</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/browse-posts">Browse Posts</NavLink>
            </li>
            <li>
              <NavLink to="/create-post">Create Post</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
