import React from 'react'
import './Navbar.css'
import SearchBar from '../searchBar/SearchBar'
import {Link} from 'react-router-dom';



function Nav({prips}) {

  return (
    <div className='case'>
      <div className='flexo'>
          <div className='tit'><Link to='/'>ATAFLEX</Link></div>
          <SearchBar prups={prips} />
          <button className='fav'><Link to="/favorite">favoris</Link></button>
      </div>
    </div>
  )
}

export default Nav