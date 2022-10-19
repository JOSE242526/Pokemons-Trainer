import React from 'react'
import "../Pokedex/Styles/header.css"


const Header = () => {
    return (
    <div className='header'>
        <img className='header__img' src="/image/home/pokedex.png" alt="" />
        <div className='header__red'>
        <div className='header__black'></div>
        <div className='header__circle'>
        <div className='header__circle-int'></div>
        </div>
        </div>
        </div>
    )
}


export default Header