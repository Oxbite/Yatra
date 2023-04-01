import React, { useEffect } from 'react'
import {Link} from 'react-scroll';
import { useState } from 'react';
import './navbar.css'

export default function Navbar(props){

  const [toogle,setToogle]=useState('')



  return(
    <div>
        <nav>
            <div className="logotext">
                <p>{props.title}</p>
            </div>
            <div  onClick={() => setToogle(!toogle)} className='hamburger'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>

            </div>
            <div className={toogle ? "navItems active" : "navItems"}>
              <ul>
                  <li>
                  <Link to='main' className='active' smooth={true} duration={1000}>Home</Link>
                  </li>
                  <li>
                  <Link to='about' smooth={true} duration={1000}>About</Link>
                  </li>
                  <li>
                  <Link to='websiteplan' smooth={true} duration={1000}>Plan</Link>
                  </li>
                  <li>
                  <Link to='faq' smooth={true} duration={1000}>FAQ</Link>
                  </li>
                  <li>
                  <Link to='footer' smooth={true} duration={1000}>Contact</Link>
                  </li>
              </ul>
            </div>
        </nav>
      
    </div>
  )
}
