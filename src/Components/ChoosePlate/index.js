import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from '../Select';

import {ComponentWrapper} from "../SidePages/Components";

const ChoosePlate = props => {
    return (
        <ComponentWrapper>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4} className="my-2">
                        <Select data={props.places} description="Все точки" handler={props.placeHandler} />
                    </Col>
                    <Col md={4} className="my-2">
                        <Select data={props.types} description="Все типы товаров" handler={props.typeHandler} />
                    </Col>
                </Row>
            </Container>
        </ComponentWrapper>
    )
}

export default ChoosePlate