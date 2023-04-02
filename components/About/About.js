import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../../assets/image/depot_delivery_1.jpg'
import { GrPlayFill } from "react-icons/gr";




const About = () => {
    return (
        <div>

<div class="site-section" id="about-section">
<Container>
  <Row className='mb-5 justify-content-center'>
    <Col md={7} class='text-center'>
    <div class="block-heading-1" data-aos="fade-up" data-aos-delay="">
        <h2>About Us</h2>
        <p className='font-gray-7'>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </Col>
  </Row>
</Container>

</div>
          <div class="site-section bg-light" id="about-section">
        <div class="container">
          <div class="row justify-content-center mb-4 block-img-video-1-wrap">
            <div class="col-md-12 mb-5">
              <figure class="block-img-video-1" data-aos="fade">
                <a href="https://vimeo.com/45830194" data-fancybox data-ratio="2">
                <span class="icon"><span class="icon-play"><GrPlayFill/></span></span>
                <Image src={about} alt="Image" class="img-fluid"/>
              </a>
              </figure>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="">
                  <div class="block-counter-1">
                    <span class="number"><span data-number="50">2</span>+</span>
                    <span class="caption">Years of Experience</span>
                  </div>
                </div>
                <div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                  <div class="block-counter-1">
                    <span class="number"><span data-number="300">20</span>+</span>
                    <span class="caption">Companies</span>
                  </div>
                </div>
                <div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                  <div class="block-counter-1">
                    <span class="number"><span data-number="108">199</span>+</span>
                    <span class="caption">Covered Countries</span>
                  </div>
                </div>
                <div class="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                  <div class="block-counter-1">
                    <span class="number"><span data-number="1500">1203</span>+</span>
                    <span class="caption">Couriers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;