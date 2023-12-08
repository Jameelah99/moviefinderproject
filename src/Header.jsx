import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import "./header.scss";

function Header() {
  return (
    <>
    <section className='header-container'>
        <div className='header'>
        <h2 className='logo'><FontAwesomeIcon icon={faVideo} />  FindYourMovie</h2>

        <nav className='nav-container'>
            <ul className='nav-list'>
                <li> <a href="">Home</a></li>
                <li> <a href="">About</a></li>
                <li> <a href="">Company</a></li>
                <li> <a href="">Docs</a></li>
                <li> <a href=""><FontAwesomeIcon icon={faGithub} /></a></li>            
            </ul>
        </nav>
        </div>
    </section>

    </>
  )
}

export default Header