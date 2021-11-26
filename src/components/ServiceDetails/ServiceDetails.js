import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDentalServiceDetails } from '../../Hooks/useDentalServiceDetails';

const ServiceDetails = () => {
    // Get Dental Services data from json 
    const [services] = useDentalServiceDetails();
    // Get Parameter from url
    const { serviceID } = useParams();
    // Find matched service from json 
    const dentalService = services?.find(service => service.id === parseInt(serviceID))
    const { id, title, service_image, info } = dentalService || {}

    return (
        <Container className="p-5">
            <Card className="mx-auto">
                <Card.Img className="img-fluid" variant="top" src={service_image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    {/* <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup> */}
                    <Link to={`/bookingservice/${id}`}>
                        <Button variant="primary">Avail This Service</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ServiceDetails;