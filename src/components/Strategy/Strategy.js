import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Strategy = () => {
    return (
        <Container>
            <h1 className='section-tille'>Design-Build-Sustain : Mode 1-2-3 Strategy</h1>
            <p className='section-details'>Sparrowan works through Mode 1-2-3 Strategy, which is Design-Build-Sustain. We believe anything well designed can be developed amazingly. Our team cover all from development to deployment and ensure extended product life to enhance revenue.</p>
            <>
                <div className="stra-box">
                    <div className='stra-icon'>
                        <h1>①</h1>
                    </div>
                    <div className='discrip'>
                        <h1>Design</h1>
                        <p>The first step after the idea is design. Right designs add confidence to your product and brand. Sparrowan help clients develop a clear product strategy by combining design, industry and technology expertise that unify business and technology architectures to drive business results and outcomes.</p>
                    </div>
                </div>

                <div className="stra-box">
                    <div className='stra-icon'>
                        <h1>②</h1>
                    </div>
                    <div className='discrip'>
                        <h1>Build</h1>
                        <p>We at Sparrowan, build software and applications for product and platform companies by adopting digital transformation and product engineering approach. Our applications are built in such a way that they are future ready, able to rapidly get to the market and are cost-effective</p>
                    </div>
                </div>

                <div className="stra-box">
                    <div className='stra-icon'>
                        <h1>③</h1>
                    </div>
                    <div className='discrip'>
                        <h1>Sustain</h1>
                        <p>We handle product improvement, customization, and integration as part of our managed services. Our support services assist clients in extending the usability of their core products while also enhancing performance, marketability, and profitability.</p>
                    </div>
                </div>
            </>
        </Container>
    );
};

export default Strategy;