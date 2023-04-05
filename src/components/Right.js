import React from 'react';
import { motion } from 'framer-motion';
import insta from '../assets/images/instagram.png';

function Right() {
    const animateIcon = {
        rest: {
            scale: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.2,
            transition: { duration: 0.5 }
        },
        tap: {
            scale: 0.9
        }
    }

    return (
        <div className='right'>
            <h2>About</h2>
            <div className='contact'>
                <p className='phone'>Call <a
                        href='tel:2062404372'
                    >
                        (206) 240-4372
                    </a> 
                    to schedule a lesson.
                </p>
                <motion.a
                    href='https://www.instagram.com/cateloose'
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={animateIcon}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate="rest"
                >
                    <img 
                        alt='Instagram icon'
                        src={insta}
                    />
                </motion.a>
            </div>
            <div className='credentials'>
                <p className='cred-text'>As a life-long dancer, some of my experience includes:</p>
                <ul className='cred-list'>
                    <li>15+ years of ballet & jazz</li>
                    <li>Social dancing since 2005</li>
                    <li>Yoga certified</li>
                    <li>3 years of burlesque</li>
                    <li>2 years of belly dance</li>
                    <li>5+ years powerlifting</li>
                    <li>2 years distance running</li>
                </ul>
            </div>
            <p className='sendoff-text'>Don't hesitate to reach out if I can answer any questions or help you with your dancing goals!</p>
        </div>
    );
}

export default Right;