import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const services = [
    {
      id:1,
      name: 'Web App development',
      content:'Develop robust online applications to suit your business needs and cater to your clients faithfully.',
      icon:'https://cdn-icons-png.flaticon.com/512/2920/2920249.png'
    },
    {
      id:2,
      name: 'Mobile App development',
      content:'Developing innovative and native mobile apps for Android, iOS, BlackBerry and Windows platforms',
      icon:'https://cdn-icons-png.flaticon.com/128/7075/7075373.png'
    },
    {
      id:3,
      name: 'AEM Solutions',
      content:'AEM brings your content management system (CMS) & digital asset management (DAM) in one place',
      icon:'https://cdn-icons-png.flaticon.com/512/1125/1125008.png'
    },
    {
      id:4,
      name: 'ML & AI',
      content:'Machine Learning and Artificial Intelligence solution for your organization by experts hand',
      icon:'https://cdn-icons-png.flaticon.com/512/897/897219.png'
    }
    ,
    {
      id:5,
      name: 'Cloud Solution',
      content:'We help large companies with enterprise-oriented certified cloud and cyber security solutions',
      icon:'https://cdn-icons-png.flaticon.com/512/565/565190.png'
    }
    ,
    {
      id:6,
      name: 'E-Commerce',
      content:'We provide ultimate e-commerce solution as well as customizations for your e-commerce business',
      icon:'https://cdn-icons-png.flaticon.com/512/2898/2898372.png'
    }
    ,
    {
      id:7,
      name: 'BI Solution',
      content:'Complete Business Intelligence Solutions to take better decisions for your organization',
      icon:'https://cdn-icons-png.flaticon.com/512/2329/2329087.png'
    }
    ,
    {
      id:8,
      name: 'ERP',
      content:'ERP 23 is the all-in-one management software to streamline every process in your organization’s business',
      icon:'https://cdn-icons-png.flaticon.com/512/9071/9071468.png'
    }
    ,
    {
      id:9,
      name: 'E-Learning',
      content:'We develop LMS platforms with Moodle, to create the online learning environment the way you imagined.',
      icon:'https://cdn-icons-png.flaticon.com/512/3221/3221515.png'
    }
    ,
    {
      id:10,
      name: 'AR VR Solution',
      content:'Complete Augmented and Virtual Reality Solutions-customized to give life to your visual commerce',
      icon:'https://cdn-icons-png.flaticon.com/512/3647/3647765.png'
    }
    ,
    {
      id:11,
      name: 'Software Testing As A Service',
      content:'Using the latest tools & concrete methodologies to ensure the readiness of your digital solution',
      icon:'https://cdn-icons-png.flaticon.com/512/7018/7018383.png'
    }
    ,
    {
      id:12,
      name: 'Outsourcing',
      content:'Sparrowan is a leading IT outsourcing company helping businesses increase conversions, sales, and engagement for more than an era. Expand your business reach with high-quality outsourcing services.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2257/2257084.png'
    } 
  ]



const Servicebody = () => {
    return (
        <Container>
            <h1 className='section-tille'>Technological Solutions</h1>
            <div className="row">
            {
                services.map((service) =>(
                    <div className="col-12 col-md-2 col-lg-4 col-sm-12 mb-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${service.icon}`} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {
                                service.content
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
    );
};

export default Servicebody;