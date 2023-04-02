import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sea from '../../assets/image/depot_img_1.jpg'
import air from '../../assets/image/depot_img_2.jpg'
import Package from '../../assets/image/depot_img_3.jpg'

const Types = () => {
  return (
<Container className='mt-5 ftco-service-image-1'>
  <Row xs={1} sm={2} md={3}>
    {items.map((item)=>
      <Col key={item.title}>
          <div className="service text-center">
              <Image src={item.img} alt="Image" className="img-fluid"/>
            <div className="px-md-3">
              <h3><Link href="#">{item.title}</Link></h3>
              <p>{item.details}</p>
            </div>
          </div>
      </Col>
    )}
  </Row>
</Container>
  );
};

export default Types;

const items = [
  {
    title: 'Sea Freight',
    details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    img: sea
  },
  {
    title: 'Air Freight',
    details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    img: air
  },
  {
    title: 'Package Forwarding',
    details: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    img: Package
  },
]