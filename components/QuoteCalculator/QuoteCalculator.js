import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

export default function QuoteCalculator() {
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [destination, setDestination] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };

  const calculateCost = (e) => {
    e.preventDefault()
    // Implement your cost calculation logic here
    const baseCost = 10;
    const additionalCost = weight * 0.5 + size * 0.75;

    let shippingCost = baseCost + additionalCost;

    if (destination === 'Europe') {
      shippingCost *= 1.1;
    } else if (destination === 'Asia') {
      shippingCost *= 1.2;
    }

    if (shippingMethod === 'Express') {
      shippingCost *= 1.5;
    }

    setEstimatedCost(shippingCost);
  };

  return (
  <Container >
  <Row className='d-flex justify-content-center align-items-end'>
            <Col md={6} className="my-5 py-3" data-aos="fade-up" data-aos-delay="100">
            <Form onSubmit={calculateCost}>
                <Row className="form-group">
                  <Col md={6} className="mb-4">
                    <input type="number" className="form-control form-size" placeholder="Weight (kg)"  onChange={handleWeightChange}/>
                  </Col>
                  <Col md={6}>
                    <input type="number" className="form-control form-size" placeholder="Size" onChange={handleSizeChange}/>
                  </Col>
                </Row>
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                    <Form.Group controlId="destination">  
                    <Form.Control className='form-size' as="select" value={destination} onChange={handleDestinationChange}>
                      <option value="">Select a destination</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia">Asia</option>
                      <option value="North America">North America</option>
                    </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                  <Form.Group controlId="shippingMethod">
                  <Form.Control className='form-size' as="select" value={shippingMethod} onChange={handleShippingMethodChange}>
                    <option value="">Select a shipping method</option>
                    <option value="Standard">Standard</option>
                    <option value="Express">Express</option>
                  </Form.Control>
                  </Form.Group>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12} className='text-end'>
                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Calculate Cost"/>
                  </Col>
                </Row>
                </Form>
                {estimatedCost !==0 &&  <Alert className='mt-4' key='primary' variant='primary'>
                  Estimated Cost {estimatedCost}
                </Alert>}
                
            </Col>
          </Row>
  </Container>
  );
}
