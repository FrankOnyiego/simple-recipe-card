import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function RecipeDetails() {
  const { id } = useParams();

  const[recipes, setRecipes]=useState([]);

    async function getData() {
        try {
          const response = await axios.get(`http://localhost:5000/recipes/${id}`);
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
<>
<Header />
    {recipes.map((item)=>(
      <div className="container mt-5">
        <h1>{item.Title.toUpperCase()}</h1>
    <div class="row mt-1">
<div className="container mt-5">
<div className="row">
  <div className="col-md-6 order-md-1" >
    <img style={{maxWidth: '40vw'}} src='https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg' alt="rd" />
  </div>
  <div className="col-md-6 order-md-2">
    <h2>Description</h2>
    <p>{item.description}</p>
    <h4 style={{fontWeight: 'bold'}}>Ingredients</h4>
    <div>{item.ingredients}</div>
  </div>
</div>
</div>
</div>
</div>
    ))
    }
<Footer />
</>
  )
}

export default RecipeDetails
