import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import JoinPhoto from '../../assets/Hero_banner-2.png'

const CareerPromo = () => {
    return (
        <Container className='join-wrap'>
            <div className='join-section'>
                <h2>Want to Join Us as a Partner?</h2>
                <p>With the help of our partners, we can share our expertise and resources around the world. And thus we are expanding as the home of top IT professionals. So contact us to see how you can join our global family!</p>
                <button className='join-btn'>See Why & How</button>
            </div>
            <div className='join-img'>
                <Image src={JoinPhoto} alt="sparrowan career and join as a partner"/>
            </div>
        </Container>
    );
};

export default CareerPromo;