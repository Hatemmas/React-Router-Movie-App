import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "./Rating"
import { Button } from '@mui/material'

const MoviesCard = ({movie}) => {
  return (
    <div className='movieCard'>
        <img src={movie.image} alt='Poster' />
        <h3>{movie.name}</h3> 
        <Rating className='ratingCard' score={movie.rating} />
        <p>{movie.date}</p>
        <Button variant="contained" color='error' size="small">
          <Link to={`/discription/${movie.id}`} style={{textDecoration:"none", color: "white"}}>Discription</Link>
        </Button>
    </div>
  )
}

export default MoviesCard