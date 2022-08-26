import React from 'react'
import './Navbar.css'
import SearchBar from '../searchBar/SearchBar'


function Nav({prips}) {

  return (
    <div className='case'>
      <div className='flexo'>
          <div className='tit'>ATAFLIX</div>
          <SearchBar prups={prips} />
          <div className='fav'>Mes favoris</div>
      </div>
    </div>
  )
}

export default Nav