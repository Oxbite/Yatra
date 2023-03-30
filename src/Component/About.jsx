import React from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';
import Imageanimation from './Imageanimation';
import book from '../images/images/aboutBook.svg';


export default function About(){
    return(
        <div>
            <div className="abutus" id='about'>
                

                <div className="abtcontainer">

                        
                        


                    <div className="abtimg book">
                    <ScrollRotate method={"perc"} loops={3}>
                        <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                        
                    </ScrollRotate>
                    </div>

                    <div className="abtimg book">
                    <ScrollRotate method={"perc"} loops={3}>
                        <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                        
                    </ScrollRotate>
                    </div>

                    <div className="abtimg book">
                    <ScrollRotate method={"perc"} loops={3}>
                        <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                        
                    </ScrollRotate>
                    </div>

                    <div className="abtimg book">
                    <ScrollRotate method={"perc"} loops={3}>
                        <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                        
                    </ScrollRotate>
                    </div>

                    <div className="abtimg">
                        <ScrollRotate method={"perc"} loops={3}>
                            <object type="image/svg+xml" aria-label="pcImage" data={book} width="70px"></object>
                            
                        </ScrollRotate>
                    </div>

                    <p className='heading'> ABOUT <span>YATRA</span></p>
                    <p className='abuttext'>
                    Yatra is a dynamic and innovative web development company that specializes in creating custom websites for clients.
                    With a focus on delivering high-quality websites that meet the unique needs and preferences of each client,
                    Whether you come to Yatra with their own designs or rely on the company's expert team to design a website from scratch,
                    you can expect a seamless and personalized experience
                    Yatra's commitment to customer satisfaction and cutting-edge web development techniques has made it a trusted partner for
                    businesses of all sizes. 
                    </p>
                </div>
            </div>
        </div>
    )
}
