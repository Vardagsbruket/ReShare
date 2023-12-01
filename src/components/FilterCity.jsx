import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../reducers/postSlice';

export const FilterCity = () => {

    const cityList =  useSelector((state) =>state.posts.cityList);
    const selectedCity = useSelector((state) => state.posts.selectedCity);
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch(setCity(e.target.value));
    }

  return (
    <div> <label htmlFor="city">Select a city </label>
    <select id="city" onChange={handleSelect}>
      <option value="all">all</option>
      {cityList.map((city,index) => (
        <option key={index}>{city}</option>
      ))}
     
    </select></div>
  )
}
