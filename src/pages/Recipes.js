import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
function Recipes() {
  const[recipes, setRecipes]=useState([]);
    async function getData() {
        try {
          const response = await axios.get('http://localhost:5000/recipes');
          console.log(response.data);
          setRecipes(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      
      useEffect(()=>{
        getData();
      },[])

      
  return (
    <div className="container">
    <div className="row">
      {recipes.map((item)=>(
        <NavLink
          to={`/recipes/${item.rid}`}
          key={item.rid}
        >
              <div className="col-md-4">
                <img src="https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg" alt="preview" style={{ width: "100%", height: "100%" }} />
              <h3>{item.Title}</h3>
              <p></p>
            </div>
        </NavLink>
      ))
      }
    </div>
  </div>
  
  )
}

export default Recipes
