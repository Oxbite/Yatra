import React from 'react';
import Imageanimation from './Imageanimation';
import book from '../images/images/book.svg';

// import aboutimg from '../images/images/aboutBook.png';


export default function About(){
    return(
        <div>
            <div className="abutus" id='about'>
                <div className="abtcontainer">
                    <div className="abtimg">
                        {/* <img src={aboutimg} width="100px" height="100px" /> */}
                        <object type="image/svg+xml" aria-label="pcImage" data={book} width="100%"></object>

                        {/* <Imageanimation/> */}
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
