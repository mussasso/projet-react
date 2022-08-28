import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Cards from '../cards/Cards';
import {Link} from 'react-router-dom';



function Fav(sprout) {

    console.log(sprout);

  return (
    <div>
        <div>
          <ul>
            <li><Link to="/hey">film a voir</Link></li>
            <li><Link to="/">film deja vue</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/favorite/" element={<Cards crds={sprout} />} />
          <Route exact path="/favorite/hey" element={<h1>hey</h1>} />
        </Routes>
    </div>
  )
}

export default Fav;