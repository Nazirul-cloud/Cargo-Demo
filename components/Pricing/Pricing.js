import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FcCheckmark } from "react-icons/fc";

const Pricing = () => {
    return (
        <div className="site-section bg-light" id="pricing-section">
        <Container>
          <Row className="mb-5 d-flex justify-content-center text-center">
            <Col md={7}>
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                <h2>Pricing</h2>
                <p className='font-gray-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                </div>
            </Col>
          </Row>

            <Row md={3} className='mb-5 justify-content-center'>
                {pricing.map((price)=>
                <Col key={price.title} className="mb-4"  data-aos="fade-up" data-aos-delay="">
              <div className="pricing">
                    <h3 className="text-center text-black">{price.title}</h3>
                    <div className="price text-center mb-4">
                    <span><span>${price.price}</span> / year</span>
                    </div>
                    <ul className="list-unstyled ul-check success mb-5">
                    <li> <FcCheckmark/> {price.list_1}</li>
                    <li> <FcCheckmark/> {price.list_2}</li>
                    <li className="remove"> <FcCheckmark/> {price.list_3}</li>
                    <li className="remove"> <FcCheckmark/> {price.list_4}</li>
                    <li className="remove"> <FcCheckmark/> {price.list_5}</li>
                    </ul>
                    <p className="text-center">
                    <a href="#" className="btn btn-primary btn-md">Buy Now</a>
                    </p>
                </div>
                </Col>
            )}
            </Row>
        </Container>
      </div>
    
    );
};

export default Pricing;

const pricing = [
    {
        title: 'Basic',
        price: 200,
        list_1: 'Officia quaerat eaque neque',
        list_2:'Possimus aut consequuntur ',
        list_3:'Lorem ipsum dolor sit amet',
        list_4:'Consectetur adipisicing elit',
        list_5:'Dolorum esse odio quas '
    },
    {
        title: 'Premium',
        price: 400,
        list_1: 'Officia quaerat eaque neque',
        list_2:'Possimus aut consequuntur ',
        list_3:'Lorem ipsum dolor sit amet',
        list_4:'Consectetur adipisicing elit',
        list_5:'Dolorum esse odio quas '
    },
    {
        title: 'Professional',
        price: 750,
        list_1: 'Officia quaerat eaque neque',
        list_2:'Possimus aut consequuntur ',
        list_3:'Lorem ipsum dolor sit amet',
        list_4:'Consectetur adipisicing elit',
        list_5:'Dolorum esse odio quas '
    },
]