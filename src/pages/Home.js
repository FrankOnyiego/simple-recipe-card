import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Recipes from './Recipes'

function Home() {
  return (
    <>
        <Header />
            <br />
            <header className="bg-image mb-4" style={{'backgroundImage': 'url(https://mccormick.widen.net/content/qvxeigxwtq/original/christmas_turkey_637390546118030666_800x800.jpg)',  height: '50vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', alignItems: 'center'}}>
                <div className="bg-text text-center py-5 mx-auto">
                  <h1 className="text-white font-weight-bold">Welcome to Recipes!</h1>
                  <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </header>

            <Recipes />
            <br />
            <section className="bg-dark text-white py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mx-auto text-center">
        <h2>Learn More</h2>
        <p className="lead">Discover our wide selection of delicious and easy-to-follow recipes, curated by our team of expert chefs. From classic comfort food to creative and unique dishes, we have something for every taste and occasion.</p>
        <a href="#" className="btn btn-secondary btn-lg mt-4">Get Started</a>
      </div>
    </div>
  </div>
</section>


        <Footer />
    </>
  )
}

export default Home
