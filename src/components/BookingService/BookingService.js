import React from 'react';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDentalServiceDetails } from '../../Hooks/useDentalServiceDetails';

const BookingService = () => {
    // Get Dental Services 
    const [services] = useDentalServiceDetails();
    // GEt id from routing path 
    const { serviceID } = useParams();
    // Retrived matched service from json 
    const dentalService = services?.find(service => service.id === parseInt(serviceID))
    // Destructuring retrived service 
    const { title } = dentalService || {}

    return (
        <Container className="p-5">
            <h1 className="mt-5 text-center">Please Submit below form after payment done, then we will contact with you</h1>
            <span className="text-info fs-1 fw-bold text-start text-md-center">Your Select Service : {title}</span>
            <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Payment</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option value="payment-1">Bkash</option>
                            <option value="payment-2">Nagod</option>
                            <option value="payment-3">Others</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Payment/Transaction ID</Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container >
    );
};

export default BookingService;