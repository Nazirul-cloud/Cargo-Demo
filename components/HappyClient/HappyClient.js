import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import one from '../../assets/image/person_1.jpg'
import two from '../../assets/image/person_2.jpg'
import three from '../../assets/image/person_3.jpg'


const HappyClient = () => {
    return (
        <div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
        <Container>

          <div className="text-center mb-5">
            <div className="block-heading-1">
              <h2>Happy Clients</h2>
            </div>
          </div>

          <div className="owl-carousel nonloop-block-13">
            <Row md={3}>
                {clients.map((client)=>
                <Col key={client.name} className="block-testimony-1 text-center">
                <blockquote className="mb-4">
                  <p>&ldquo;{client.say}&rdquo;</p>
                </blockquote>
                <figure>
                  <Image src={client.img} alt="Image" className="img-fluid rounded-circle mx-auto"/>
                </figure>
                <h3 className="font-size-20 text-black">{client.name}</h3>
                </Col>
                )}
            </Row>
          </div>

        </Container>
      </div>
    );
};

export default HappyClient;

const clients = [
    {
        img:one,
        name: 'Ricky Fisher',
        say: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'
    },
    {
        img:two,
        name: 'John Ricky',
        say: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'
    },
    {
        img:three,
        name: 'Ricky Fisher',
        say: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'
    }
]