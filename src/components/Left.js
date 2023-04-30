import React from 'react';
import { motion } from 'framer-motion';

function Left() {
    const animateLink = {
        rest: {
            scale: 1,
            color: 'blue',
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.1,
            x: '10px',
            color: '#F7F6F7', 
            transition: { duration: 0.5 }
        },
        tap: {
            scale: 0.9
        }
    }

    return (
        <div className='left'>
            <h2 className='left-header'>Lessons</h2>
            <div className='left-content'>
                <p className='list-descriptor'>Many styles to choose from:</p>
                <ul>
                    <li>Salsa</li>
                    <li>Tango</li>
                    <li>Bachata</li>
                    <li>Merengue</li>
                    <li>Swing</li>
                    <li>Polka</li>
                    <li>Waltz</li>
                    <li>Yoga (virtual only)</li>
                    <li>General partner work</li>
                </ul>
                <p className='lesson-text-2'>Lessons are tailored to your needs, whether that is learning a new style, improving your current skills, or preparing for a special event. If you don't have a particular dance in mind, I'm happy to recommend styles that will best meet your needs.</p>
                <p className='lesson-text-2 rate'>My rate is $60 per hour for singles and couples.</p>
                <p className='lesson-text-2 link'>
                    Our first lesson will take place at <motion.a 
                        href='https://www.dancecenterchicago.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={animateLink}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        animate="rest"
                    >
                        Dance Center Chicago:
                    </motion.a>
                </p>
                <p className='lesson-text-2 address'>
                    3868 N Lincoln Ave.
                    <br/>
                    2nd Floor
                    <br/>
                    Chicago, IL 60613</p>
                <p className='lesson-text-2'>All following lessons can take place in home or at an agreed upon location.</p>
            </div>
        </div>
    );
}

export default Left;