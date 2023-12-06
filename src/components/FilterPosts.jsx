import "./FilterPosts.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setType } from "../reducers/postSlice";
import { FilterCity } from "./FilterCity";

export const FilterPosts = () => {
  const selectedType = useSelector((state) => state.posts.selectedType);
  const selectedCategory = useSelector((state) => state.posts.selectedCategory);
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.posts.categoryList);
  const typeList = ["All", "Available", "Give away", "Needed"];
  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleType = (e) => {
    dispatch(setType(e.target.value));
  };

  return (
    <div className="filter">
      <div>
        <label htmlFor="type">Borrow, lend or give away?</label>
        <select onChange={handleType}>
          <option value="" disabled>
            Borrow/Needed/Give away
          </option>
          <option value={selectedType}>{selectedType}</option>
          {typeList.map((type, index) =>
            type !== selectedType ? (
              <option key={index} value={type} className="dropdown">
                {type}
              </option>
            ) : (
              ""
            )
          )}
        </select>
      </div>
      <div>
        <label htmlFor="category">Choose category</label>
        <select onChange={handleCategory}>
          <option value={selectedCategory}>{selectedCategory}</option>
          {categoryList.map((category, index) =>
            category !== selectedCategory ? (
              <option key={index} value={category}>
                {category}
              </option>
            ) : (
              ""
            )
          )}
        </select>
      </div>
      <FilterCity />
    </div>
  );
};
