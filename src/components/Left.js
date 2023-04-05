import React from 'react';

function Left() {
    return (
        <div className='left'>
            <h2>Lessons</h2>
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
                    <li>Yoga</li>
                    <li>General partner work</li>
                </ul>
                <p className='lesson-text'>Lessons are tailored to your needs, whether that is learning a new style, improving your current skills, or preparing for a special event.</p>
                <p className='lesson-text'>If you don't have a particular dance in mind, I'm happy to recommend styles that will best meet your needs.</p>
                <p className='lesson-text'>
                    Our first lesson will take place at 
                    <a 
                        href='https://www.dancecenterchicago.com'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dance Center Chicago
                    </a>
                    :
                </p>
                <p className='lesson-text address'>
                    3868 N Lincoln Ave.
                    <br/>
                    2nd Floor
                    <br/>
                    Chicago, IL 60613</p>
                <p className='lesson-text'>All following lessons can take place in home or at an agreed upon location.</p>
                <p className='lesson-text'>My rate is $60 per hour for singles and couples.</p>
            </div>
        </div>
    );
}

export default Left;