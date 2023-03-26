import React from 'react';
import {motion} from 'framer-motion';
import Images from '../images/images/aboutBook.png';

function Imageanimation(){
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    }}>
        <Image />
    </div>
  )
}

function Image() {
    return(
        <motion.div
        
            initial={{opacity:0, scale:0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.6}}
            >
            <img src={Images} width="100px" height="100px"/>
        </motion.div>
    )
}
export default Imageanimation