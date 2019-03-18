import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';

import {ComponentWrapper} from "../SidePages/Components";

const ChoosePlate = props => {
    return (
        <ComponentWrapper>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <FormControl as="select" onChange={(e) => props.handler(e.target.value)}>
                            <option value={null} disabled selected>Choose...</option>
                            {
                                props.data && props.data.map(item => (
                                    <option value={item.id}>{item.name}</option>
                                ))
                            }
                        </FormControl>
                    </Col>
                </Row>
            </Container>
        </ComponentWrapper>
    )
}

export default ChoosePlate