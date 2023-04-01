import React from 'react';
import Homeimg from '../images/images/mail.svg';
import pc from '../images/images/pc.svg';
import './home.css'
import {Link} from 'react-scroll';

export default function Home(){
    return(
        <>
            <div className="maincontainer" id='main'>
                <div className="container">
                    <div className="text1">
                        <p className='logoText'>
                        WebYatra<br />
                        </p>
                        <p className='tagline'>
                            pave the road to<br />
                            your digital destinations...<br />
                        </p>
                        <Link to='about' smooth={true} duration={1000}>
                        
                        <div className="btn">
                                <button className="abtBtn">Learn More</button >
                        </div>
                        </Link>

                    </div> 
                    <div className="homeimage">
                        <object className='computer' type="image/svg+xml" aria-label="pcImage" data={pc} ></object>
                    </div>
                </div>
            </div>
        </>
    )
}