import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import { useServices } from './../../Hooks/useServices';

const Services = () => {
    // Get All Services from JSON by Custom Hook 
    const [services] = useServices();

    return (
        <section className="health-care">
            <Container>
                <Row xs={1} md={3} className="g-4 container p-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;