import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { servicesID } = useParams();
    const [singleService, setSingleservice] = useState({});
    const [success, setSuccess] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setSuccess("");
        }, 5000);
    }, [success]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${servicesID}`)
            .then(res => res.json())
            .then(data => setSingleservice(data))
    }, [servicesID]);

    // delete 
    const history = useHistory();
    const handleDelete = (servicesID) => {
        const url = `http://localhost:5000/services/${servicesID}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setSuccess('Service Deleted SuceessFully');
                setTimeout(() => {
                    history.push('/')
                }, 2000)
            })
    }
    return (
        <div className="container mt-3 mb-3">
            {servicesID}
            <h4 className="text-success">{success}</h4>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <Col>
                        <Card>
                            <Card.Img className="img-thumbnail" src={singleService.img} />
                            <Card.Body>
                                <Card.Title className="text-success">{singleService.name}</Card.Title>
                                <Card.Title>{singleService.price}</Card.Title>
                                <Card.Text>
                                    {singleService.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-between">
                                    <Button onClick={() => handleDelete(servicesID)} variant="danger">Delete</Button>
                                    <Link to={`/update-service/${servicesID}`}>
                                        <Button variant="info" className="text-white">Update</Button>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default Booking;