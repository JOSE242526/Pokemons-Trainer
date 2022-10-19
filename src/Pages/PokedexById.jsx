import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Pokedex/Header'
import Pokemon404 from '../Components/PokedexById/Pokemon404'
import "./Style/pokedexId.css"

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])
  
  if(hasError) {
    return <Pokemon404 />
  }

  return (
    <article>
      <Header/>
      <header>
      <img className='pokedexById__img' src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
      <div className='container__div'>
        
        <ul>
        <h2 className='card__id'>#{pokemon?.id}</h2>
        <h2 className={`title__poke letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <div className='card__info-li'>
        <li className='info__li'>Weigth {pokemon?.weight}</li>
        <li className='info__li'>Height {pokemon?.height}</li>
        </div>
        <div className='card__type-id'>Type
        <li className='type__id'> 
        {
            pokemon?.types.map(type => (
                <li key={type.slot}>{type.type.name}</li>
            ))
        }
        </li>
        <div>
          <h2 className='card__poke-id'></h2>Stats
        <ul>
                {
                    pokemon?.stats.map(stat => (
                    <li key={stat.stat.name} className='card__stat '>
                        <span className='card__label'> {stat.stat.name}</span>
                        <span className={`card__stat-number ${stat.base_stat}`}>{stat.base_stat}</span>
                    </li>
                    ))
                }
            </ul>
            <div className='card__moves'>
              <h2 className='title__move'>Move</h2>
              <ul>
                <li className='info__move'>{
            pokemon?.moves.map(move => (
                <li key={move.name}>{move.move.name}</li>
            ))
        }</li>
                <li></li>
              </ul>
            </div>
            </div>
        </div>
        </ul>
        </div>
      </header>
    </article>
  )
}

export default PokedexById