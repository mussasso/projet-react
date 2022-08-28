import React from 'react'
import './Cards.css'


const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = (props) => {


  
let clr = (e) => {
  if (e.target.style.color == 'red'){
    e.target.style.color = '#ffffff'

  } else {
  e.target.style.color = 'red'
  }
}

  return (
    <div className='parent'>
        <div className="cardInfo">
            <img src={Poster(props.poster_path)} alt="poster" />
            <div className="card-text">
              <p>{props.title}</p>
              <p>{props.overview}</p>
              <p>{props.release_date}</p>
              <i className="fa-solid fa-heart icon" onClick={clr}></i>


            </div>
        </div>

    </div>
  )
}

export default Cards