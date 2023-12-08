import React from 'react'
import searchpic from './assets/Search Pic.webp';
import './heading.scss';

function Heading() {
  return (
    <>
     <section className='main-container'>
       <div className='heading'>
       <div>
          <p className='intro'>Unlock a World of <span>Movies</span>. <br /> Discover, Explore & Enjoy!</p>
          <button className='btn'>Find Movies</button>
       </div>

       
        <img src={searchpic} alt="SEO PIC" width='40%' />
       

       </div>
     </section>
    </>
  )
}

export default Heading