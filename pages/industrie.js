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
    imgUrl:faCircleDollarToSlot,
    name:"FinTech"
    },
    {
    id:2,
    imgUrl:faUserDoctor,
    name:"Health Care"
    },  
    {
    id:3,
    imgUrl:faShopify,
    name:"E-com"
    },  
    {
    id:4,
    imgUrl:faBuilding,
    name:"Real Estate"
    },  
    {
    id:5,
    imgUrl:faCar,
    name:"Automotive"
    },  
    {
    id:6,
    imgUrl:faUncharted,
    name:"Software"
    },  
    {
    id:7,
    imgUrl:faRocket,
    name:"Startup"
    },  
    {
    id:8,
    imgUrl:faGraduationCap,
    name:"Education"
    },  
    {
    id:9,
    imgUrl:faShop,
    name:"Retail"
    },  
    {
    id:10,
    imgUrl:faBuildingNgo,
    name:"Non-Profit"
    },  
    {
    id:11,
    imgUrl:faTowerCell,
    name:"Telco",
    discription:""
    },  
    {
    id:12,
    imgUrl:"",
    name:"Entertainment",
    discription:""
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
                    <div className="col-12 col-md-3 col-sm-12 my-5">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='' />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {
                                item?.content
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