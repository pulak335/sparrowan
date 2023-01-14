import { faCheck, faClock, faCode, faEarthAfrica, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Highlight = () => {
    return (
        <Container className='d-flex justify-content-between mt-5 mobile-ui'>
            <div className='icon-sction'>
                <div className='icon'>
                    <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h3>12+</h3>
                <p className='text-black'>Tech Partners</p>
            </div>

            <div className='icon-sction'>
                <div className='icon-2'>
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <h3>16+</h3>
                <p className='text-black'>Years of Experience</p>
            </div>
            <div className='icon-sction'>
            <div className='icon-2'>
                <FontAwesomeIcon icon={faEarthAfrica} />
            </div>
                <h3>15+</h3>
                <p className='text-black'>Countries Served</p>
            </div>
            <div className='icon-sction'>
                <div className='icon'>
                    <FontAwesomeIcon icon={faCode} />
                </div>
                <h3>700+</h3>
                <p className='text-black'>IT Professionals</p>
            </div>
            <div className='icon-sction'>
                <div className='icon-2'>
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3>1000+</h3>
                <p className='text-black'>Projects Completed</p>
            </div>
        </Container>
    );
};

export default Highlight;