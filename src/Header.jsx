import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import "./header.scss";

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }


  return (
    <>
    <section className='header-container'>
        <div className='header'>
        <h2 className='logo'><FontAwesomeIcon icon={faVideo} />  FindYourMovie</h2>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`}  onClick={toggleMenu}>
           {isOpen ? <FontAwesomeIcon icon={faXmark} size='8xs'/> : <FontAwesomeIcon icon={faBars} size='8xs'/>}
        </div>

        <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
            <ul className='nav-list'>
                <li> <a href="">Home</a></li>
                <li> <a href="">About</a></li>
                <li> <a href="">Company</a></li>
                <li> <a href="">Docs</a></li>
                <li id='github'> <a href=""><FontAwesomeIcon icon={faGithub} /></a></li>            
            </ul>
        </nav>
        </div>
    </section>

    </>
  )
}

export default Header