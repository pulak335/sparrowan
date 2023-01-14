import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Family = () => {
    return (
        <Container>
            <h1 className='section-tille'>Our Global Family</h1>
            <Row>
                <Col className='cos-row'>
                    <div className='usa d-flex justify-content-center align-items-center'>
                        <div className='text-center'>
                        <h1>Sparrowan LLC, USA</h1>
                        <p>
                            Stationed in USA, has a strong hold in
                            offering MNCs and Enterprises premium
                            IT services they need.
                        </p>
                        </div>
                    </div>
                </Col>
                <Col className='cos-row'>
                    <Row className='cos-row'>
                            <div className='uk d-flex justify-content-center align-items-center'>
                                <div className='text-center'>
                                <h1>Sparrowan LLC, UK</h1>
                                <p>
                                Our UK Partner, Gture combines full product
                                development with software team deployment and is
                                adapted to each customer’s needs.
                                </p>
                                </div>
                            </div>
                    </Row>
                    <Row>
                            
                        <div className='bd d-flex justify-content-center align-items-center'>
                                <div className='text-center'>
                                <h1>Sparrowan Ltd., Bangladesh</h1>
                                <p>
                                Our Bangladesh partner who can provide your company with a
                                comprehensive sourcing, planning and management
                                methodology for IT & Software Solution.
                                </p>
                                </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Family;