import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // Destructuring service 
    const { id, title, info, service_image } = props.service || {};

    return (
        <Col md={4} sm={12} className="flex-column mb-3">
            <img className="img-fluid w-50" src={service_image} alt={title || 'No Image'} />
            <h4>{title}</h4>
            <p>
                {info}
            </p>
            <Link to={`/services/${id}`}>
                <Button variant="info" className="">
                    Details <i className="fas fa-arrow-right"></i>
                </Button>
            </Link>
        </Col>
    );
};

export default Service;