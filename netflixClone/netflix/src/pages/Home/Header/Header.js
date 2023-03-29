import React from 'react'
import logo from "./../../../logo.png"
import {ImSearch} from "react-icons/im" 
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt="logo"/>
        <div>
            <Link to="/">Tv Shows</Link>
            <Link to="/">Movies</Link>

            <Link to="/">Recently Added</Link>

            <Link to="/">MyList</Link>

        </div>
        <ImSearch />
      </nav>

      
    </div>
  )
}

export default Header
