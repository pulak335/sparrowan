import { faShopify, faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faBuildingNgo, faCar, faCircleDollarToSlot, faGraduationCap, faHospitalUser, faPhotoFilm, faRocket, faShop, faTowerCell, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const industry =[
    {
    id:1,
    icon:faCircleDollarToSlot,
    name:"FinTech"
    },
    {
    id:2,
    icon:faUserDoctor,
    name:"Health Care"
    },  
    {
    id:3,
    icon:faShopify,
    name:"E-com"
    },  
    {
    id:4,
    icon:faBuilding,
    name:"Real Estate"
    },  
    {
    id:5,
    icon:faCar,
    name:"Automotive"
    },  
    {
    id:6,
    icon:faUncharted,
    name:"Software"
    },  
    {
    id:7,
    icon:faRocket,
    name:"Startup"
    },  
    {
    id:8,
    icon:faGraduationCap,
    name:"Education"
    },  
    {
    id:9,
    icon:faShop,
    name:"Retail"
    },  
    {
    id:10,
    icon:faBuildingNgo,
    name:"Non-Profit"
    },  
    {
    id:11,
    icon:faTowerCell,
    name:"Telco"
    },  
    {
    id:12,
    icon:faPhotoFilm,
    name:"Entertainment"
    },  
]


const Industries = () => {
    return (
        <div>
        <h1 className='section-tille'>Industries We Serve</h1>
            <div className='in-background'>
                <Container>
                    
                <div className='row'>
                    {industry.map(item=>(

                        <div className="col-12 col-md-2 col-lg-2 in-hover">
                            <div  className='in-icon'>
                                <FontAwesomeIcon icon={item.icon} size={20}/>
                            </div>
                            <h3 className='text-center text-white'>{item.name}</h3>
                        </div>
                    ))
                    }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Industries;