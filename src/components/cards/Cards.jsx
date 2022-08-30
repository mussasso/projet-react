import React, {useState} from 'react'
import './Cards.css'


const Poster= (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
} 

const Cards = (props) => {

let [favrt, setFavrt] = useState([]);
  
let clr = (e) => {
  if (e.target.style.color == 'red'){
    e.target.style.color = '#ffffff'
    

  } else {
  e.target.style.color = 'red'
  setFavrt(props)
  console.log(setFavrt);
  }
}
let clrr = (e) => {
  if (e.target.style.opacity !== '0.1'){
    e.target.style.opacity = '0.1'
  } else if(e.target.style.opacity !== '1') {
    e.target.style.opacity = '1'
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
              <i className="fa-solid fa-eye" onClick={clrr}></i>
            </div>
        </div>
    </div>
  )
}

export default Cards