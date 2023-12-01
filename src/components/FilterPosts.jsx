import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setType } from "../reducers/postSlice";

export const FilterPosts = () => {
  const type = useSelector((state) => state.posts.selectedType);
  const category = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();
  const categoryList = [
    "Vehicles",
    "Furniture",
    "Toys",
    "clothes & shoes",
    "Tools & machines",
    "interior",
    "Sports & hobby",
    "Kitchen appliances",
    "Garden",
    "Other",
  ];
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
        <option value={type}>{type}</option>
        {typeList.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="category">choose category</label>
      <select onChange={handleCategory}>
        <option value={category}>{category}</option>
        {categoryList.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
