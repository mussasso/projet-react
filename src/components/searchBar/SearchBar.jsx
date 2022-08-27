import './SearchBar.css'
import React, { useState } from 'react'

function SearchBar({ prups }) {
    
    const [searchTerm, sertSearchTerm] = useState("")

    const Poster = (posterpath) => {
        return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
    }
    return (
        <div >
            <div >
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={(event) => {
                        sertSearchTerm(event.target.value)
                    }}
                />
                {prups.filter((val) => {
                    if (searchTerm == "") {
                        return null
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div key={key} className='mx-auto test'>
                            <img src={Poster(val.poster_path)} alt="poster" />
                            <div className="card-text">
                                <p>{val.title}</p>
                                <p>{val.overview}</p>
                                <p>{val.release_date}</p>
                                <i className="fa-solid fa-heart icon" ></i>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default SearchBar