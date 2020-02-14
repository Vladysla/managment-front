import React from 'react';
import {
    Prices,
    PriceTitle,
    PriceUE,
    PriceValue
} from '../Components';

const Price = ({ product, product_id, usa }) => {
    return (
        <Prices>
            <PriceTitle>Цена закупа: </PriceTitle>
            <PriceValue>{`${product[product_id].info.price_arrival} грн. `}<PriceUE>{`(${(product[product_id].info.price_arrival / usa).toFixed(1)} $)`}</PriceUE></PriceValue>
            <PriceTitle>Цена продажи: </PriceTitle>
            <PriceValue>{`${product[product_id].info.price_sell} грн. `}<PriceUE>{`(${(product[product_id].info.price_sell / usa).toFixed(1)} $)`}</PriceUE></PriceValue>
        </Prices>
    );
};

export default Price;