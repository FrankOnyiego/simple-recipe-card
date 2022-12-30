import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Recipes from './Recipes'

function Home() {
  return (
    <>
        <Header />
            <br />
            <Recipes />
        <Footer />
    </>
  )
}

export default Home
