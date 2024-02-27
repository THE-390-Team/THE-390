import React from 'react'
import { Container, Card, ListGroup } from "react-bootstrap"

const Financial = () => {
    return (
        <Container style={{ width: '400px' }}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <strong>1</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>2</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>3</strong>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default Financial