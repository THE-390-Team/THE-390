import React from 'react';
import { Container, Card, Accordion, Table, Row, Col } from "react-bootstrap";

const Financial = () => {
    // Dummy variable to replicate JSON file 
    const property = {
        "property": {
            "1": {
                "property_name": "Property 1",
                "condos": [
                    {
                        "id": 1,
                        "condo": 101,
                        "fee": 100000.0
                    },
                    {
                        "id": 5,
                        "condo": 101,
                        "fee": 934.0
                    }
                ],
                "condo_total": 100934.0,
                "parkings": [
                    {
                        "id": 1,
                        "parking_number": "A101",
                        "fee": 500.0
                    },
                    {
                        "id": 2,
                        "parking_number": "B102",
                        "fee": 600.0
                    }
                ],
                "parking_total": 1100.0,
                "storages": [
                    {
                        "id": 1,
                        "storage_number": "C101",
                        "fee": 200.0
                    }
                ],
                "storage_total": 200.0,
                "total": 102234.0
            },
            "2": {
                "property_name": "Property 2",
                "condos": [],
                "condo_total": 0,
                "parkings": [],
                "parking_total": 0,
                "storages": [],
                "storage_total": 0,
                "total": 0
            }
        },
        "TOTAL": 102234.0
    };

    return (
        <Container style={{ width: '100%' }}>
            <Card>
                <div className="d-flex justify-content-center">
                    {/* Title for the financial details with styling */}
                    <Card.Title><h1 style={{ fontSize: "40px", fontWeight: "bold", marginTop: "15px" }}>Financial Details</h1></Card.Title>
                </div>
            
                <Accordion defaultActiveKey="0" style={{ maxHeight: '600px', overflowY: 'scroll' }}> 
                    {/* Mapping through property objects to display financial information */}
                    {Object.keys(property.property).map(propertyKey => (
                        <Accordion.Item key={propertyKey} eventKey={propertyKey}>
                            <Accordion.Header>
                                {/* Displaying property name and total */}
                                <Row style={{ width: '100%' }}>
                                    <Col>
                                        {`Financial Info ${property.property[propertyKey].property_name}`}
                                    </Col>
                                    <Col style={{ textAlign: "right" }}>
                                        Total: {property.property[propertyKey].total}
                                    </Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body style={{ maxHeight: "200px", overflowY: "scroll" }}>
                                {/* Displaying condo fees */}
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Condo #</th>
                                            <th style={{ width: '50%' }}>Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {property.property[propertyKey].condos.map(condo => (
                                            <tr key={condo.id}>
                                                <td>Condo {condo.condo}</td>
                                                <td style={{ width: '50%' }}>{condo.fee}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>Total Condo Fees:</td>
                                            <td>{property.property[propertyKey].condo_total}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                {/* Displaying parking fees */}
                                <Table bordered hover style={{ maxHeight: "200px", overflowY: "scroll" }}>
                                    <thead>
                                        <tr>
                                            <th>Parking #</th>
                                            <th style={{ width: '50%' }}>Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {property.property[propertyKey].parkings.map(parking => (
                                            <tr key={parking.id}>
                                                <td> Parking {parking.parking_number}</td>
                                                <td style={{ width: '50%' }}>{parking.fee}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>Total Parking Fees:</td>
                                            <td>{property.property[propertyKey].parking_total}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                {/* Displaying storage fees */}
                                <Table bordered hover style={{ maxHeight: "200px", overflowY: "scroll" }}>
                                    <thead>
                                        <tr>
                                            <th>Storage #</th>
                                            <th style={{ width: '50%' }}>Fees</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {property.property[propertyKey].storages.map(storage => (
                                            <tr key={storage.id}>
                                                <td> Storage {storage.storage_number}</td>
                                                <td style={{ width: '50%' }}>{storage.fee}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>Total Storage Fees:</td>
                                            <td>{property.property[propertyKey].storage_total}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                {/* Div at the bottom showing the last total */}
                <div style={{ textAlign: "left", marginTop: "20px", marginLeft:"20px", marginBottom:"20px"}}>
                    <strong>Total fees for all properties: {property.TOTAL}</strong>
                </div>
            </Card>
        </Container>
    )
}

export default Financial;
