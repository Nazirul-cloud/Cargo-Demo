import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ferry from '../../assets/image/ferry.png'

const Services = () => {
    return (
        <div className="site-section bg-light" id="services-section" fluid>
          <Container>
          <Row className="mb-5 justify-content-center">
                <Col className='text-center' md={6}>
                <div className="block-heading-1">
                <h2>What We Offer</h2>
                <p className='font-gray-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
                </Col>
            </Row>
       
    
          <Row xs={1} md={3} className="owl-carousel owl-all g-4">
            {services.map((service)=>
            <Col key={service.title} className="block__35630 text-center">
             <Image src={service.icon} alt='' className='img-fluid'/>
              <h3 className="my-3">{service.title}</h3>
              <p className='font-gray-7'>{service.details}</p>
            </Col>
            )}
          </Row>
          </Container>
        </div>
    );
};

export default Services;

const services = [
    {
        icon: ferry,
        title: 'Sea Freight',
        details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        icon: ferry,
        title: 'Air Freight',
        details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
        icon: ferry,
        title: 'Sea Freight',
        details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      icon: ferry,
      title: 'Sea Freight',
      details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      icon: ferry,
      title: 'Sea Freight',
      details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      icon: ferry,
      title: 'Sea Freight',
      details: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    
]