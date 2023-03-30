import React from 'react';
import Homeimg from '../images/images/mail.svg';
import pc from '../images/images/pc.svg';
import './home.css'
export default function Home(){
    return(
        <>
            <div className="maincontainer" id='main'>
                <div className="container">
                    <div className="text1">
                        <p>
                            SOME COOL TAGLINE <br />
                            THAT ATTRACTS <br />
                            EYES <br />
                        </p>
                        <div className="btn">
                            <button className="abtBtn">About Us</button >
                        </div>
                    </div> 
                    <div className="homeimage">
                        <object className='computer' type="image/svg+xml" aria-label="pcImage" data={pc} ></object>
                    </div>
                </div>
            </div>
        </>
    )
}