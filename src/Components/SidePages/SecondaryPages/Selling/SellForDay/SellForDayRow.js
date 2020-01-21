import React from 'react';
import DateTime from 'luxon/src/datetime';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell,
    ImageCell
} from '../../../../Table';
import { getImage } from '../../../../../API';
import { dateFormatLuxon, dateFormatLuxonFormated } from '../../../../../Constants';

const ProductsTransferTableRow = props => {
    const {data, onSelect, USA} = props;
    const date = DateTime.fromFormat(data.sold_at, dateFormatLuxon).toFormat(dateFormatLuxonFormated);

    return (
        (data && data.brand) ?
        <TableRow>
            <Cell onClick={() => onSelect(data.product_id)}>{data.sum_id}</Cell>
            <ImageCell>
                <img src={getImage(data.photo)} alt="Product detail"/>
            </ImageCell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.model}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.type.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.size.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.color.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{date}</Cell>
            <Cell>{`${data.product.price_arrival} грн.  (${(data.product.price_arrival / USA).toFixed(1)} $)`}</Cell>
            <Cell>{`${data.product.price_sell} грн.  (${(data.product.price_sell / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
            : (
                <TableRow>
                    <Cell>Пусто</Cell>
                </TableRow>
            )
    )
};


export default RowWrapper(ProductsTransferTableRow)