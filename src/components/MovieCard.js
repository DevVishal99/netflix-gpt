import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-44'>
        <img alt="Movie Card" src={IMG_CDN_URL+movie?.poster_path}/>
    </div>
  )
}

export default MovieCard