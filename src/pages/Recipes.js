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
              <div className="card mb-3 col-md-3 mt-4"
              style={{
                textDecoration: 'none'
              }}>
        <NavLink
          to={`/recipes/${item.rid}`}
          key={item.rid}
          className="mt-4"
        >

  <img src="https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg" alt="preview" style={{ width: "100%", height: "240px",maxWidth: '450px', margin: "auto auto" }} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{item.Title}</h5>
  </div>
 
        </NavLink>
          <div className="card-footer d-flex justify-content-between align-items-center">
          <button className="btn" style={{backgroundColor: '#e36ff7'}}>Bookmark &nbsp;<i class="fas fa-bookmark"></i></button>
        </div>
        </div> 
      ))
      }
    </div>
  </div>
  
  )
}

export default Recipes
