import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setType } from "../reducers/postSlice";

export const FilterPosts = () => {
  const type = useSelector((state) => state.posts.selectedType);
  const category = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();
  const categoryList = useSelector((state.posts.categoryList));
  const typeList = ["all","Available", "Give away", "Needed"];
  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleType = (e) => {
    dispatch(setType(e.target.value));
  };

  return (
    <div>
      <lable htmlFor="type">Choose type</lable>
      <select onChange={handleType}>
        {/* <option value={type}>{type}</option> */}
        {typeList.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="category">choose category</label>
      <select onChange={handleCategory}>
        {/* <option value={category}>{category}</option> */}
        {categoryList.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
