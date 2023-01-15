import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Recipes from './Recipes'
import { NavLink } from 'react-router-dom'
import FindMeal from '../components/FindMeal'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const[filtered,setfilter]=useState([]);
const {min,max,meal}=useParams();
useEffect(()=>{
        if(min !== 'null' || max !== 'null' || meal !=='null' ){
          axios.get(`http://localhost:5000/filter/${min}/${max}/${meal}`).then(response=>{
          setfilter(response.data);
        })
        }else{
          console.log("no params");
        }
},[])


  return (
    <> 
        <Header />
            <br />
            <header className="bg-image mb-4" style={{'backgroundImage': 'url(https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg)',  height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', alignItems: 'center'}}>
                <div className="bg-text text-center py-5 mx-auto">
                  <h1 className="text-white font-weight-bold">Welcome to Recipes!</h1>
                  <p className="text-white">Discover our wide selection of delicious and easy-to-follow recipes.</p>
                </div>
            </header>

<FindMeal />
<br />
<div>
<p style={{color: 'red', fontWeight: 'bold', marginLeft: '5px'}}>Showing all meals!</p>  
</div>
            <Recipes meal={filtered}/>
            <br />
            <section className="bg-dark text-white py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <h2>Learn More</h2>
        <p className="lead">Discover our wide selection of delicious and easy-to-follow recipes, curated by our team of expert chefs. From classic comfort food to creative and unique dishes, we have something for every taste and occasion.</p>
        <NavLink href="#" className="btn btn-secondary btn-lg mt-4">Get Started</NavLink>
      </div>
    </div>
  </div>
</section>


        <Footer />
    </>
  )
}

export default Home
