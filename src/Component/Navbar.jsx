import React from 'react'
import {Link} from 'react-scroll';

export default function Navbar(props){
  return(
    <div>
        <nav>
            <div className="logoname">
                <p className="logotext">{props.title}</p>
            </div>
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
                <Link to='contact' smooth={true} duration={1000}>Contact</Link>
                </li>
            </ul>
        </nav>
        

    </div>
  )
}
