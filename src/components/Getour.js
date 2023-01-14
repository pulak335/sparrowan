import React from 'react';
import { Container } from 'react-bootstrap';

const Getour = () => {
    return (
        <div className='promo-banner'>
            <Container className='promo-box'>
                <div className='promo-hero'>
                    <h1>Build your next solution with us</h1>
                </div>
                <div className='promo-dis'>
                    <h4 className='promo-hero-subtext'>We solve software challenges in innovative ways.</h4>
                    <button className='promo-btn'>Contact Us</button>
                </div>
            </Container>
        </div>
    );
};

export default Getour;