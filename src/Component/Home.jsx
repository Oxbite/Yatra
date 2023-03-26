import React from 'react';
import Homeimg from '../images/images/Computer.png';

export default function Home(){
    return(
        <>
            <div className="maincontainer" id='main'>
                <div className="container">
                    <div className="text1">
                        <p>
                            SOME COOL TAGLINE <br />
                    girt        THAT ATTRACTS <br />
                            EYES <br />
                        </p>
                    </div>
                    <div className="homeimage">
                        <img src={Homeimg}  width="600px" height="450px"/>
                    </div>
                </div>
                <button className="abtBtn">About Us</button>
            </div>
        </>
    )
}