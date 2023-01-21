import React from 'react';
import { Card, Container } from 'react-bootstrap';
import IndustriesHead from '../src/components/Indrusties/IndustriesHead';
import { faShopify, faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBuilding, faBuildingNgo, faCar, faCircleDollarToSlot, faGraduationCap, faHospitalUser, faPhotoFilm, faRocket, faShop, faTowerCell, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const industry =[
    {
    id:1,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/4825/4825474.png",
    name:"FinTech",
    discription:'Build secure and regulations compliant fintech applications to cater your financial services to your customers.'
    },
    {
    id:2,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/2449/2449899.png",
    name:"Health Care",
    discription:'We build solutions for healthcare & pharmaceutical industries to meet their ever-growing demands and requirements.'
    },  
    {
    id:3,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/1162/1162456.png",
    name:"E-Commerce",
    discription:"We develop robust eCommerce solutions with nopcommerce platform to take your business to the digital platform."
    },  
    {
    id:4,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/602/602175.png",
    name:"Real Estate",
    discription:"Build custom solutions specifically for the real estate industry to automate processes and digitize customer experiences."
    },  
    {
    id:5,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/4879/4879928.png",
    name:"Automotive",
    discription:"Helping automotive businesses adopt the best software solution for their needs and be their trusted digital solution partner,"
    },  
    {
    id:6,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/3950/3950815.png",
    name:"Software",
    discription:"We help IT and software firms with custom development and other digital solutions."
    },  
    {
    id:7,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/2285/2285537.png",
    name:"Startup",
    discription:"We build digital solutions for startups that resonate with their business models and goals."
    },  
    {
    id:8,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/4916/4916916.png",
    name:"Education",
    discription:"We help academias to transition to the digital platform with LMS solutions and custom solution development that meet their needs."
    },  
    {
    id:9,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/1198/1198361.png",
    name:"Retail",
    discription:"To help retail industries thrive we develop solutions that automate processes and open new avenues for customer journey and satisfaction."
    },  
    {
    id:10,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/3555/3555625.png",
    name:"Non-Profit",
    discription:"We build digital solutions for non-profit and government organizations to promote automation and digital transformation."
    },  
    {
    id:11,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/3806/3806259.png",
    name:"Telco",
    discription:"",
    discription:"We provide enterprise solutions and applications for the telecom industry to meet the needs of their millions of users."
    },  
    {
    id:12,
    imgUrl:"https://cdn-icons-png.flaticon.com/512/2950/2950675.png",
    name:"Entertainment",
    discription:"We are always here to uplift your business and expand your brands by communicating your thoughts in a better way with your clients.",
    },  
]

const industrie = () => {
    return (
        <>
         <IndustriesHead/>  
          <Container>
          <div className="row">
            {
                industry.map((item) =>(
                    <div className="col-12 col-md-2 col-lg-4 col-sm-12 my-5">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${item?.imgUrl}`}  />

                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {
                                item?.discription
                            }
                            <br/>
                            <Link href="/contactus"> About More <FontAwesomeIcon icon={faArrowRight} size="20px" className='ms-2'/></Link>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                ))
            }
            </div>
          </Container>
        </>
    );
};

export default industrie;