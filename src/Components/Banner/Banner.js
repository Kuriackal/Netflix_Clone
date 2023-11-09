import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants.js'
import axios from '../../axios.js';
import './Banner.css';

function Banner() {
  const [movie,setMovie] = useState([]);


  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results && response.data.results.length > 0) {
        setMovie(response.data.results[Math.floor((Math.random()*10))]);
      }
    })
    
   
  },[] );
  return (

    
    <div
    style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path:movie.id})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>MyList</button>
            </div>
            <h1 className='description'>{movie? movie.overview:""}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner