import React from 'react';
// import { Link } from 'react-router-dom';
import Contacting from '../images/images/mail.svg';
import Facebook from '../images/images/facebook.png';
import Linkedln from '../images/images/linked.png';
import Instragram from '../images/images/instragram.png';

export default function Contact(){
    return(
        <>
            <div className="contact" id='contact'>
                <div className='contcontainer'>
                    <div className='contimg'>
                    <object type="image/svg+xml" aria-label="pcImage" data={Contacting} width="600px"></object>
                        {/* <img src={Contactimg} height= "550" /> */}
                    </div>
                    <div className="contline"></div>
                    <div className="contdetail">
                        <p className='contheading'>Contact</p>
                        <div className='conttexts'>
                            <p className='contheadname'>Location</p> 
                                <p className='conttext'>Dhungedhara, Vanasthali</p>

                            <p className='contheadname'>Phone</p>
                                <p className='conttext'>+977-9818044464,</p>
                                <p className='conttext'>+977-9841665403</p>  

                            <p className='contheadname'> Email</p> 
                                <p className='conttext'>yatrainfosys@gmail.com</p> 

                            <p className='contheadname'>Socials</p> 
                            <div className='social_links'>
                                <a href="https://www.youtube.com/" target="_blank"><img src={Facebook}/></a>
                                <a href=""><img src={Instragram}/></a>
                                <a href=""><img src={Linkedln}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>hi</div>
        </>
    )
}