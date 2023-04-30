import React from 'react';
import { motion } from "framer-motion";
import { WindupChildren, Pace } from "windups";
import smile from '../assets/images/smile.png';
import yoga from '../assets/images/yoga.png';
import dip from '../assets/images/dip.png';
import salsa from '../assets/images/salsa.png';

function Main() {
    const animateImg = {
        rest: {
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.2,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div className='main'>
            <div className='header'>
                <div className='headings'>
                    <WindupChildren>
                        <Pace ms={40}>
                            <h1>Cate Curtis</h1>
                            <h2 id='headings-title'>Dance & Yoga Instructor</h2>
                        </Pace>
                    </WindupChildren>
                </div>
                <div className='images'>
                    <motion.img 
                        className='large-img'
                        alt='Dance class'
                        src={smile}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Salsa dance'
                        src={salsa}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Tango dance'
                        src={dip}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Yoga class'
                        src={yoga}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;