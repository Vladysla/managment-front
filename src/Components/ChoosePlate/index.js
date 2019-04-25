import React from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../Table'
import Select from '../Select';
// import { Loader } from '../Icons';

import {ComponentWrapper} from "../SidePages/Components";

import Alert from '../Alert';

const ChoosePlate = props => {
    return (
        <ComponentWrapper>
            <Container>
                {
                    (props.alert.show && props.alert.type === 'transfer') &&
                        <Alert alert={props.alert} closeAlert={props.closeAlert} />
                }
                <Row className="justify-content-center">
                    {
                        props.places &&
                        <Col className="my-2">
                            <Select userPlace={props.user_place_id} data={props.places} description="Все точки" handler={(e) => props.placeHandler(e, props.page)} isTransferPage={props.page === 'transfer'} />
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
                {
                    props.page === 'sell' &&
                    <Row className="row justify-content-center mt-3">
                        <Button onClick={props.sellProducts} variant="outline-info">Продать</Button>
                    </Row>
                }
            </Container>
        </ComponentWrapper>
    )
}

const mapStateToProps = state => ({
    user_place_id: state.localSettings.user.place_id
})

export default connect(mapStateToProps, null)(ChoosePlate)