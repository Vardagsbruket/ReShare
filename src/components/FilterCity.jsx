import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../reducers/postSlice";
import "./FilterPosts.css";

export const FilterCity = () => {
  const cityList = useSelector((state) => state.posts.cityList);
  const selectedCity = useSelector((state) => state.posts.selectedCity);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    dispatch(setCity(e.target.value));
  };
  return (
    <div>
      <label htmlFor="city">Select a city </label>
      <select id="city" onChange={handleSelect}>
        <option value="selectedCity">
          <span id="dropdown">{selectedCity}</span>
        </option>
        {cityList.map((city, index) =>
          city !== selectedCity ? <option key={index}>{city}</option> : ""
        )}
      </select>
    </div>
  );
};
