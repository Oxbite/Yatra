import React from 'react';
import Imageanimation from './Imageanimation';
// import aboutimg from '../images/images/aboutBook.png';


export default function About(){
    return(
        <div>
            <div className="abutus" id='about'>
                <div className="abtcontainer">
                    <div className="abtimg">
                        {/* <img src={aboutimg} width="100px" height="100px" /> */}
                        <Imageanimation/>
                    </div>
                    <p className='heading'> ABOUT <span>YATRA</span></p>
                    <p className='abuttext'>
                        Yatra is so cool so you are my client. <br />
                        Yatra is so cool so you are my client. <br />
                        Yatra is so cool so you are my client. <br />
                        Yatra is so cool so you are my client. <br />
                        Yatra is so cool so you are my client. <br />
                        Yatra is so cool so you are my client. <br />
                    </p>
                </div>
            </div>
        </div>
    )
}
