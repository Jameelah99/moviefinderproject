import React, { useState } from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import './mainsection.scss';

function Mainsection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchStatus, setSearchStatus] = useState()

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
      setSearchStatus(response.status)
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
          <button type="submit" className='btn'><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
        </form>

        {isLoading ? <p className='loading-indicator'><FontAwesomeIcon icon={faSpinner} /></p> :  
         searchResult.length  > 0 ? (
        <table className='search-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
          {searchResult.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
              <td>{movie.Plot}</td>
            </tr>
          )) }
          </tbody>
        </table>
        ) : searchStatus === 200 && searchResult.length <= 0 ? <p>No results found.</p> : null 
      }
        



        <p className='terms'>By using our service you are accepting our <span>terms of service.</span></p>
    </section>

    </>
  );
}

export default Mainsection