import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
import './mainsection.scss';

function Mainsection() {
  return (
    <>
    <section className='search-container'>
        <p className='title'>Search for a Movie</p>
        <form>
           <input
              className='input-box'
              type="text"
              placeholder="Search for your movie..."
              // value={searchQuery}
              // onChange={handleChange}
            />
          <button type="submit" className='btn'><FontAwesomeIcon icon={faSearchengin}/></button>
        </form>

        <p className='terms'>By using our service you are accepting our <span>terms of service.</span></p>
    </section>

    </>
  )
}

export default Mainsection