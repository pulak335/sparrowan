import { faFacebook, faInstagramSquare, faLinkedinIn, faMedium, faMediumM, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../assets/logo/footer-logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <div className='footer-logo'>
                            <Image width={300} src={footerLogo}></Image>
                            <div className='footer-box'>
                                <h3>Sparrowan Ltd.(BD)</h3>
                                <p>House # 193, Road # 2, Avenue #3, Mirpur DOHS, Dhaka-1216, Bangladesh</p>
                            </div>
                            <hr/>
                            <div className='footer-box'>
                                <h3>Sparrowan LLC.(UK)</h3>
                                <p>275 New N Rd, Ste3087 London, N17AA</p>
                            </div>
                            <hr/>
                            <div className='footer-box'>
                                <h3>Sparrowan LLC.(USA)</h3>
                                <p>4400 W Sample RD. Suite # 102 Coconut Creek, FL-33073</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3 className='footer-title'>Resources</h3>
                        <ul className='footer-nav'>
                            <li><a href="">Overview</a></li>
                            <li><a href="">Support Center</a></li>
                            <li><a href="">Our Blog</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Career</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 className='footer-title'>Connect with us</h3>
                        <div className='footer-nav-2'>
                            <div className='footer-icon'>
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                <FontAwesomeIcon icon={faInstagramSquare} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faMedium} />
                            </div>
                            <div className='footer-contact'>
                                <h3>Phone</h3>
                                <p><a href="tel:+8801717282234">+880 17 1728-2234</a></p>
                                <p><a href="tel:+19544495289">+1(954) 449-5289</a></p>
                                <p><a href="tel:+4420455770819">44(204) 5577-0819</a></p>
                                <h3>Email</h3>
                                <p><a href="mailto:info@sparrowan.com">info@sparrowan.com</a></p>
                                <p><a href="mailto:support@sparrowan.com">support@sparrowan.com</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <div className='text-white p-3 footer-text'>
                    <p>Copyright © 2023 Sparrowan Ltd.. All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;