import React from 'react';
import { motion } from "framer-motion";
import { WindupChildren, Pace, Pause } from "windups";
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
                        <Pace getPace={(char) => (char === " " ? 100 : 40)}>
                            <h1>Cate Curtis</h1>
                        </Pace>
                        <Pause ms={300} />
                        <Pace getPace={(char) => (char === " " ? 200 : 70)}>
                            <h3>Dance & Yoga Instructor</h3>
                        </Pace>
                    </WindupChildren>
                </div>
                <div className='images'>
                    <motion.img 
                        alt='Partnered dancing'
                        src={smile}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Salsa dancing'
                        src={salsa}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Deep dancing dip'
                        src={dip}
                        variants={animateImg}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    />
                    <motion.img 
                        alt='Yoga pose'
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