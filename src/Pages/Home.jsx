import React from 'react'
import FormHome from '../Components/Home/FormHome'
import Footer from '../Components/Shared/Footer'
import "./Style/Home.css"

const Home = () => {

  
  return (
    <article className='pokedex'>
     <img className='pokedex__img' src="/image/home/pokedex.png" alt="" />
      <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
      <p className='pokedex__text'>Give me your name to see the pokedex </p>
      <FormHome />
      <Footer />
    </article>
  )
}

export default Home