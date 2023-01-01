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
          className="col-md-3"
        >
              <div>
                <img src="https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg" alt="preview" style={{ width: "100%", height: "240px",maxWidth: '450px', margin: "auto auto" }} />
              <p>{item.Title}</p>
            </div>
        </NavLink>
      ))
      }
    </div>
  </div>
  
  )
}

export default Recipes
