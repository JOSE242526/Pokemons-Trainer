import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/inputsearch.css"


const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <div>
    <form className='form__search' onSubmit={submit}>
      <input className='input__search' id='search' type="text" placeholder='Search a pokemon' />
      <button className='search__btn'>Search</button>
    </form>
    </div>
  )
}

export default InputSearch
