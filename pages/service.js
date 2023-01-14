import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import Servicebody from '../src/components/Services/Servicebody';
import ServiceHead from '../src/components/Services/ServiceHead';
import Fore from '../src/assets/ingridiencs_1.gif';
import WorkPro from '../src/assets/work.png'

const service = () => {
    return (
        <>
          <ServiceHead/>
          <Servicebody/>
          <Container>
            <p className='tagline-service'>
              We believe we are good at what we do because we have the four ingredients for amazing software just right. 

              Read how we do things in our series: Cookbook for a Hearty Company
            </p>
            <div className='stage'>
            <Image src={Fore} alt="sparrowan"/>
            </div>
            <h1 className='section-tille'>Development Work Process</h1>
            <div className='work-proccess'>
              <Image src={WorkPro} alt="sparrowan work"/>
            </div>
          </Container>  
        </>
    );
};

export default service;