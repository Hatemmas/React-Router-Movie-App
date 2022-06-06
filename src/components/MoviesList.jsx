import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({movies}) => {
  return (
    <div className='movieList'>
        {movies.map((film) => ( <MoviesCard movie={film} key={film.id} /> ))}
    </div>
  )
}

export default MoviesList