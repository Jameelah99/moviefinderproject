import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import "./footer.scss";

function Footer() {
  return (
    <>
    <section className='footer-container'>
        <div className='footer'>
           <h4 className='logo'> <FontAwesomeIcon icon={faVideo} size='xm' />  FindYourMovie</h4>

           <p className='copyright'> Copyright 2023 - Rotimi Jemilat. All rights reserved.</p>

           <a href="https://github.com/Jameelah99"> <FontAwesomeIcon icon={faGithub} /></a>
        </div> 
    </section>

    </>
  )
}

export default Footer