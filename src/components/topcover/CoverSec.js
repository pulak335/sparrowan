import React from 'react';
import Topcover from '../../assets/cover/technolog.jpg';
import Image from 'next/image';
import { Button, Container } from 'react-bootstrap';
const CoverSec = () => {
    return (
        <div className='top-cover-section'>
            <Container>
                    <div className='text-center header-content'>
                        <h1>Delivering innovative services</h1>
                        <h6>The power of technology unleashed for you and others like you.</h6>
                        <h6>Your business counts on us.</h6>
                        <button className='top-btn'>Explore More</button>
                    </div>
            </Container>
        </div>
    );
};

export default CoverSec;