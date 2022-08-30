import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Cards from '../cards/Cards';
import {Link} from 'react-router-dom';



function Fav({sprout}) {

    console.log(sprout);
    

  return (
    <div>
        <div>
          <ul>
            <li><Link to="/Favorite/Vue">film a voir</Link></li>
            <li><Link to="/Favorite/Book">film deja vue</Link></li>
          </ul>
        </div>
        <div>
        {sprout.map( (e , index) => {
      return <Cards crds={sprout} key={index} {...e} />
          })}
        </div>
        <Routes>:
          <Route exact path="/Favorite/Vue" element={<Cards crds={sprout} />} />
          <Route path="/Favorite/Book" element={<h1>hey</h1>} />
        </Routes>
    </div>
  )
}

export default Fav;