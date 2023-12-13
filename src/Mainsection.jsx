import React, { useState } from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import './mainsection.scss';

function Mainsection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const apiKey = 'd5227094';
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchTerm}`);
      const movies = response.data.Search || [] ;

      const movieDetails = await Promise.all(
        movies.map(async (movie) => {
          const detailsResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`);
          return detailsResponse.data;
        })
      );

      setSearchResult(movieDetails);


    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false)
    }

  };

  return (
    <>
    <section className='search-container'>
        <p className='title'>Search for a Movie</p>
        <form onSubmit={handleSearch}>
           <input
              className='input-box'
              type="text"
              placeholder="Search for your movie..."
              value={searchTerm}
              onChange={handleChange}
            />
          <button type="submit" className='btn'><FontAwesomeIcon icon={faSearchengin}/></button>
        </form>

        {isLoading && <p className='loading-indicator'>Loading...</p> }

        <ul>
          {searchResult.map((movie) => (
            <li key={movie.imdbID}>
              <strong>{movie.Title}</strong> ({movie.Year}) <br />
              <span>Type: {movie.Type} </span> <br />
              <span>Details: {movie.Plot}</span> <br />
            </li>
          ))}
        </ul>

        <p className='terms'>By using our service you are accepting our <span>terms of service.</span></p>
    </section>

    </>
  );
}

export default Mainsection