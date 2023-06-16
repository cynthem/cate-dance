import React from 'react';

function Left() {
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
                <p className='lesson-text-2 zoom'>I offer a free 20 minute Zoom consultation to discuss your goals and assess your current dance/yoga level.</p>
                <p className='lesson-text-2'>Lessons can take place in your home, via Zoom, or at another agreed upon location.</p>
            </div>
        </div>
    );
}

export default Left;