import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setType } from "../reducers/postSlice";
import { FilterCity } from "./FilterCity";

export const FilterPosts = () => {
  const selectedType = useSelector((state) => state.posts.selectedType);
  const selectedCategory = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.posts.categoryList);
  const typeList = ["Available", "Give away", "Needed"];
  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleType = (e) => {
    dispatch(setType(e.target.value));
  };

  return (
    <div>
      <label htmlFor="type">Choose type</label>
      <select onChange={handleType}>
        <option value={selectedType}>{selectedType}</option>
        {typeList.map((type, index) => (
          type !== selectedType ?
          <option key={index} value={type}>
            {type}
          </option>
          : ""
        ))}
      </select>

      <label htmlFor="category">choose category</label>
      <select onChange={handleCategory}>
        <option value={selectedCategory}>{selectedCategory}</option>
        {categoryList.map((category, index) => (
          category !== selectedCategory ?
          <option key={index} value={category}>
            {category}
          </option>
          : ""
        ))}
      </select>
      <FilterCity />
    </div>
  );
};
