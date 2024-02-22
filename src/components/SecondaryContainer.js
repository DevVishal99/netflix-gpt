import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movie)


  return (
    <div className='bg-black '>
      <div className='-mt-64 relative'>
      <MoviesList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MoviesList title={"Popular"} movies = {movies?.popularMovies}/>
      <MoviesList title={"Top Rated Movies"} movies = {movies?.topRatedMovies}/>
      <MoviesList title={"Upcoming"} movies = {movies?.upComingMovies}/>
      </div>
    </div>
    
  )
}

export default SecondaryContainer