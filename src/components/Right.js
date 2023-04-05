import React from 'react';
import insta from '../assets/images/instagram.png';

function Right() {
    return (
        <div className='right'>
            <h2>About</h2>
            <div className='contact'>
                <p>Call (206) 240-4372 to schedule a lesson</p>
                <a
                    href='https://www.instagram.com/cateloose'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                        alt='Instagram icon'
                        src={insta}
                    />
                </a>
            </div>
        </div>
    );
}

export default Right;