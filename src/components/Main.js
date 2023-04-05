import React from 'react';
import smile from '../assets/images/smile.png'

function Main() {
    return (
        <div className='main'>
            <div className='header'>
                <h1>Cate Curtis</h1>
                <div className='images'>
                    <img 
                        alt='Partnered dancing'
                        src={smile}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;