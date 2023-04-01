import React from 'react';
import './contact.css'

export default function Contact() {
    return (
        <>   
            <div class="pg-footer">
                <footer class="footer">
                    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                    </svg>
                    <div class="footer-content">
                        <div class="footer-content-column">
                            <div class="footer-logo">
                                <a class="footer-logo-link" >
                                    <span class="hidden-link-text">LOGO</span>
                                    <h1 className='logo'>YATRA</h1>
                                </a>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Location</h2>
                                <ul id="menu-get-started" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a>Dhungedhara, Vanasthali</a>
                                    </li> 
                                </ul>
                            </div>
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Opeaning hours</h2>
                                <ul id="menu-get-started" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a>Sun - Fri</a> 
                                    </li> 
                                    <li class="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a>11am - 6pm</a>
                                    </li> 
                                </ul>
                            </div>

                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Company</h2>
                                <ul id="menu-company" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                                        <a >News</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a >Careers</a>
                                    </li>
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a >Story</a>
                                    </li><li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a >Work</a>
                                    </li>
                                    
                                    <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a >The Ultimate Team</a>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        <div class="footer-content-column">
                            <div class="footer-menu">
                                <h2 class="footer-menu-name"> Email</h2>
                                <ul id="menu-quick-links" class="footer-menu-list">
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" >yatrainfosys@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-column">
                            
                            <div class="footer-call-to-action">
                                <h2 class="footer-call-to-action-title">Call Us</h2>
                                <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:+9779841665403" target="_self"> <p className='conttext'>+977-9818044464,</p>
                                    <p className='conttext'>+977-9841665403</p> </a></p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="footer-copyright">
                        <div class="footer-copyright-wrapper">
                            <p class="footer-copyright-text">
                                <a class="footer-copyright-link"  target="_self"> ©2023| Yatra Info Sys | All rights reserved</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}