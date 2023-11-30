import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCategory } from "../reducers/postSlice";


export const FilterPosts = () => {
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
        "Other"

    ]
    const handleCategory = (e)=> {
        dispatch((setCategory(e.target.value)));
    }
 
  return (
    <div>
        <label htmlFor="category">choose category</label>
        <select onChange= {handleCategory}> 
        <option value="all" >
          all
        </option>
         {   categoryList.map((category,index) => (
                <option key = {index} value = {category} >{category}</option>

            ))}
        </select>
    </div>
  )
}
