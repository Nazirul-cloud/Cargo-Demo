import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="site-footer">
        <Container>
          <Row className='justify-content-between align-items-start'>
            <Col md={6}>
              <Row>
                <Col md={7}>
                  <h2 className="footer-heading mb-4">About Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                </Col>
                <Col md={4} className="ml-auto">
                  <h2 className="footer-heading mb-4">Features</h2>
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="ml-auto">
  
              <div className="mb-5">
                <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                <form action="#" method="post" className="footer-suscribe-form">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-size border-secondary text-white bg-white" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                      <button className="btn btn-primary form-size  text-white" type="button" id="button-addon2">Subscribe</button>
                   
                  </div>
                  </form>
              </div>
  
  
              <h2 className="footer-heading mb-4">Follow Us</h2>
              <a href="#about-section" className="smoothscroll pl-0 pr-3"><span className="icon-facebook"></span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-twitter">
                <FaTwitterSquare size='2em' color='cornflowerblue'/>
                </span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-instagram">
              <FaInstagramSquare size='2em' color='cornflowerblue'/>
                </span></a>
              <a href="#" className="pl-3 pr-3"><span className="icon-linkedin">
              <FaLinkedin size='2em' color='cornflowerblue'/>
                </span></a>
            
            </Col>
          </Row>
          <Row className="pt-5 text-center">
            <Col md={12}>
              <div className="border-top pt-5">
                <p className="copyright">
                  &copy;<strong>Cargo</strong> All Rights Reserved. Design by <a href="https://free-template.co/" target="_blank">Nazirul-Cloud</a>
                </p>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
     
    );
};

export default Footer;