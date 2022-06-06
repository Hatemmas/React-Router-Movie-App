import { Button } from '@mui/material'
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Rating from './Rating'
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const Discription = ({movies}) => {
  const params = useParams()
  // console.log(movies, params)
  const movieDiscription = movies.find((movies) => movies.id == params.id)
    console.log(movieDiscription)
    
  return (
    <div className='movieDiscription'>
      <Link to='/' >
        <HomeIcon color="error" sx={{ fontSize: 50 }} />
      </Link>
      <img src={movieDiscription.secondImage} alt='Poster' />
      <h1>{movieDiscription.name} <Button variant="contained" color='error'> Watch Trailer</Button>
      </h1>
      <Rating className='ratingCard' score={movieDiscription.rating} />
      <p>{movieDiscription.date}</p>
      <p>{movieDiscription.discription}</p>
      <div className='trailer' align="center" ><iframe width="840" height="472" src={movieDiscription.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Discription