import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../Table'
import Select from '../Select';
// import { Loader } from '../Icons';

import {ComponentWrapper} from "../SidePages/Components";
import Alert from 'react-bootstrap/Alert'

const ChoosePlate = props => {
    return (
        <ComponentWrapper>
            <Container>
                {
                    (props.alert.show && props.alert.type === 'transfer') &&
                    <Alert variant="danger">
                        {props.alert.message}
                        <button onClick={props.closeAlert} type="button" className="close">
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Закрыть</span>
                        </button>
                    </Alert>
                }
                <Row className="justify-content-center">
                    {
                        props.places &&
                        <Col className="my-2">
                            <Select data={props.places} description="Все точки" handler={(e) => props.placeHandler(e, props.page)} isTransferPage={props.page === 'transfer'} />
                        </Col>
                    }
                    {
                        props.types &&
                        <Col className="my-2">
                            <Select data={props.types} description="Все типы товаров" handler={props.typeHandler} />
                        </Col>
                    }
                </Row>
                {
                    props.page === 'transfer' &&
                    <Row className="row justify-content-center mt-3">
                        <Button onClick={props.transferProducts} variant="outline-info">Переместить</Button>
                    </Row>
                }
            </Container>
        </ComponentWrapper>
    )
}

export default ChoosePlate