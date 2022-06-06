import React from 'react'
import Rating from "./Rating";
import TextField from '@mui/material/TextField';
import AddMovies from './AddMovies';
import SearchIcon from '@mui/icons-material/Search';

const SearchMovies = ({searchRating, searchValue, handleSearch, handleRating, handleAdd,}) => {
  return (
    <div className='navBar'>
        <h1> <span> NETFLIX </span> from Jumia</h1>
        <SearchIcon className='icon' fontSize='large'/>
            <div className='search'>
              
                <TextField 
                  type="text" 
                  value={searchValue} 
                  onChange={handleSearch} 
                  id="filled-basic" 
                  label="Find a movie" 
                  color="error"
                  variant="filled"/>
            </div>
        <Rating score={searchRating} handleRating={handleRating} />
        <AddMovies add={handleAdd} />
    </div>
  )
}

export default SearchMovies