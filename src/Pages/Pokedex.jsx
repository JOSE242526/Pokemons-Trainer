import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import CardPokedex from '../Components/Pokedex/CardPokedex'
import InputSearch from '../Components/Pokedex/Styles/InputSearch'
import SelectByType from '../Components/Pokedex/SelectByType'
import Pagination from '../Components/Pokedex/Pagination'
import Header from '../Components/Pokedex/Header'
import "./Style/pokedex.css"


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  
  const [typeSelected, setTypeSelected] = useState("All Pokemons")

  useEffect(() => {
    if(typeSelected !== "All Pokemons") {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result) 
        })
        .catch(err => console.log(err))
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
   axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  const userName = useSelector(state => state.userName)


// logica de paginacion
const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(10)

const initialPoke = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage

  return (
    <div>
      <Header/>
      <header>
      
        <p className='p__welcom'>Welcom <span className='span__name'>{userName}</span>, here you can find your favorite pokemon</p>
      </header>
      <aside>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
            <CardPokedex 
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
          }

        </div>
      </main>
      <Pagination 
        page={page}
        pagesLength={ pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}/> 
    </div>
  )
}

export default Pokedex