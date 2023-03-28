import React from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';
import Imageanimation from './Imageanimation';
import book from '../images/images/aboutBook.svg';


export default function About(){
    return(
        <div>
            <div className="abutus" id='about'>
                <div className="abtcontainer">
                    <div className="abtimg">
                        <ScrollRotate method={"perc"} loops={3}>
                            <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                            {/* <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object> */}
                        </ScrollRotate>
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
