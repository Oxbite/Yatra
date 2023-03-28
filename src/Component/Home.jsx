import React from 'react';
import Homeimg from '../images/images/mail.svg';
import pc from '../images/images/pc.svg';
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
                    </div>
                    <div className="homeimage">
                        <object type="image/svg+xml" aria-label="pcImage" data={pc} width="600px"></object>
                        {/* <img src={Homeimg}  width="600px" height="450px"/> */}
                    </div>
                </div>
                <button className="abtBtn">About Us</button >
            </div>
        </>
    )
}