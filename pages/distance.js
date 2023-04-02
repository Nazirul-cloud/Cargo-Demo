import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function DistanceMatrix() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      // Get latitude and longitude coordinates for origin and destination using the Geocoding API
      const originUrl = `http://dev.virtualearth.net/REST/v1/Locations?q=${origin}&key=AnS5scC6wmirq7dq3XSN3wPRxvSmkHZOO1B4q0nV8vnkYj3CtoeKqqZN6hA9taws`;
      const destinationUrl = `http://dev.virtualearth.net/REST/v1/Locations?q=${destination}&key=AnS5scC6wmirq7dq3XSN3wPRxvSmkHZOO1B4q0nV8vnkYj3CtoeKqqZN6hA9taws`;
      const originResponse = await fetch(originUrl);
      const destinationResponse = await fetch(destinationUrl);
  
      if (!originResponse.ok || !destinationResponse.ok) {
        throw new Error('Failed to get location data');
      }
  
      const originData = await originResponse.json();
      const destinationData = await destinationResponse.json();
  
      // Extract latitude and longitude coordinates from Geocoding API response
      const originCoords = originData.resourceSets[0].resources[0].point.coordinates;
      const destinationCoords = destinationData.resourceSets[0].resources[0].point.coordinates;
  
      // Calculate distance using the Distance Matrix API
      const distanceUrl = `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=AnS5scC6wmirq7dq3XSN3wPRxvSmkHZOO1B4q0nV8vnkYj3CtoeKqqZN6hA9taws&origins=${originCoords.join(',')}&destinations=${destinationCoords.join(',')}&travelMode=driving`;
      const distanceResponse = await fetch(distanceUrl);
      const distanceData = await distanceResponse.json();
  
      if (distanceData.resourceSets && distanceData.resourceSets.length > 0) {
        setDistance(distanceData.resourceSets[0].resources[0].results[0].travelDistance);
      } else {
        setError('Error: No distance information available');
      }
    } catch (error) {
      console.error(error);
      setError('Error: Failed to calculate distance');
    }
  }
  

  return (

    <Container >
   <Row className='d-flex justify-content-center align-items-end'>
            <Col md={6} className="my-5 py-3" data-aos="fade-up" data-aos-delay="100">
            <Form onSubmit={handleSubmit}>
              
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                  <input type="text" className="form-control form-size" placeholder="Origin" value={origin} onChange={(event) => setOrigin(event.target.value)}  />
                  </Col>
                </Row>
  
                <Row className="form-group mb-4">
                  <Col md={12}>
                  <input type="text" className="form-control form-size" placeholder="Destination" value={destination} onChange={(event) => setDestination(event.target.value)}  />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12} className='text-end'>
                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Calculate Distance"/>
                  </Col>
                </Row>
                </Form>
                {distance && <Alert className='mt-4' key='primary' variant='primary'>
                The distance is {distance} miles.
                </Alert>}
                {error && <Alert className='mt-4' key='waring' variant='warning'>
                {error}
                </Alert>}
                
            </Col>
          </Row>
    </Container>
  );
}

export default DistanceMatrix;
