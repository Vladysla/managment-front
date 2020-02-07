import React from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../Table'
import Select from '../Select';
import ChoosePlateLoading from '../Loading/ChoosePlateLoading';

import { ComponentWrapper } from "../SidePages/Components";

const ChoosePlate = props => {
    const {
        user_place_id,
        places,
        types,
        page,
        placeHandler,
        typeHandler,
        transferProducts,
        sellProducts,
        placesLoading,
        typesLoading,
    } = props;

    if (placesLoading || typesLoading) {
        return <ChoosePlateLoading />
    }

    return (
        <ComponentWrapper>
            <Container>
                <Row className="justify-content-center">
                    {
                        places &&
                        <Col className="my-2">
                            <Select userPlace={user_place_id} data={places} description="Все точки" handler={(e) => placeHandler(e, page)} isTransferPage={page === 'transfer'} />
                        </Col>
                    }
                    {
                        types &&
                        <Col className="my-2">
                            <Select data={types} description="Все типы товаров" handler={typeHandler} />
                        </Col>
                    }
                </Row>
                {
                    page === 'transfer' &&
                    <Row className="row justify-content-center mt-3">
                        <Button onClick={transferProducts} variant="outline-info">Переместить</Button>
                    </Row>
                }
                {
                    page === 'sell' &&
                    <Row className="row justify-content-center mt-3">
                        <Button onClick={sellProducts} variant="outline-info">Продать</Button>
                    </Row>
                }
            </Container>
        </ComponentWrapper>
    )
};

const mapStateToProps = state => ({
    user_place_id: state.localSettings.user.place_id,
    placesLoading: state.products.placesLoading,
    typesLoading: state.products.typesLoading,
});

export default connect(mapStateToProps, null)(ChoosePlate)