import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie) return null;
  return (
    <div className='md:w-44 w-32'>
        <img className='rounded-lg hover:border border-red-800' alt="Movie Card" src={IMG_CDN_URL+movie?.poster_path}/>
    </div>
  )
}

export default MovieCard