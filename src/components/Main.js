import React from 'react';
import smile from '../assets/images/smile.png';
import yoga from '../assets/images/yoga.png';
import dip from '../assets/images/dip.png';
import salsa from '../assets/images/salsa.png';

function Main() {
    return (
        <div className='main'>
            <div className='header'>
                <div className='headings'>
                    <h1>Cate Curtis</h1>
                    <h3>Dance & Yoga Instructor</h3>
                </div>
                <div className='images'>
                    <img 
                        alt='Partnered dancing'
                        src={smile}
                    />
                    <img 
                        alt='Salsa dancing'
                        src={salsa}
                    />
                    <img 
                        alt='Deep dancing dip'
                        src={dip}
                    />
                    <img 
                        alt='Yoga pose'
                        src={yoga}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;