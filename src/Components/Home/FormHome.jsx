import React from 'react'
import { setUserNameGlobal } from '../../Store/Slices/userName-slices'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

const FormHome = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()))
    navigate("/pokedex")
  }


  return (
    <form onSubmit={submit} className='pokedex__form'>
    <input className='pokedex__input' type="text" placeholder='Enter your Name here.'/>
    <button className='pokedex__btn'>Catch them all</button>
  </form>
  )
}

export default FormHome