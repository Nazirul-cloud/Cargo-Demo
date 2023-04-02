import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Contact = () => {
    return (
       
        <Container>
          <Row>
            <Col md={12} className="text-center mb-5" data-aos="fade-up" data-aos-delay="">
              <div className="block-heading-1">
                <span>Get In Touch</span>
                <h2>Contact Us</h2>
              </div>
            </Col>
          </Row>

          <Row className='d-flex justify-content-between align-items-start'>
            <Col md={6} className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <form >
                <Row className="form-group">
                  <Col md={6} className="mb-4">
                    <input type="text" className="form-control form-size" placeholder="First name"/>
                  </Col>
                  <Col md={6}>
                    <input type="text" className="form-control form-size" placeholder="First name"/>
                  </Col>
                </Row>
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                    <input type="text" className="form-control form-size" placeholder="Email address"/>
                  </Col>
                </Row>
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                    <textarea name="" id="" className="form-control" placeholder="Write your message." cols="30" rows="3"></textarea>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={6} className="mr-auto">
                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message"/>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col md={4} className="ml-auto" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>34 Street Name, City Name Here, United States</span></li>
                  <li className="d-block mb-3"><span className="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                  <li className="d-block mb-3"><span className="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
     
    );
};

export default Contact;