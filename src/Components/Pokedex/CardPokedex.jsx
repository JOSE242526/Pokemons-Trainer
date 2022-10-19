import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "../Pokedex/Styles/cardPoke.css"



const CardPokedex = ({url}) => {

        const [pokemon, setPokemon] = useState()

        useEffect(() => {
            axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
        }, [])
        

    const Navigate = useNavigate()


    const handleClick = () => {
        Navigate(`/pokedex/${pokemon.id}`)
}

  return (
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <section>
        </section>
        <header className={`card-poke__header bg-${pokemon?.types[0].type.name}`}>
            <img className='card-poke__sprite' src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />

        </header>
        <section className='card-poke__body'>
            <h3 className={`card-poke__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card-poke__types-container'>
                {
                    pokemon?.types.map(type => (
                        <li key={type.slot} className='card-poke__type'>{type.type.name}</li>
                    ))
                }
            </ul>
            <p className='card-poke__type-label'>Type</p>   
            <ul className='card-poke__stats-container'>
                {
                    pokemon?.stats.map(stat => (
                    <li key={stat.stat.name} className='card-poke__stat '>
                        <span className='card-poke__stat-label'>{stat.stat.name}</span>
                        <span className={`card-poke-stat-number${stat.base_stat}`}>{stat.base_stat}</span>
                    </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default CardPokedex