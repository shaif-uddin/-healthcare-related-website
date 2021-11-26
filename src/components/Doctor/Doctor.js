import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    // Destructuring 
    const { doctors: doctorName, picture } = props.doctor || {}

    return (
        <>
            <Col>
                <Card>
                    <Card.Img className="img-fluid w-25 mx-auto mt-2 img-thumbnail rounded-pill" variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{doctorName}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Doctor;