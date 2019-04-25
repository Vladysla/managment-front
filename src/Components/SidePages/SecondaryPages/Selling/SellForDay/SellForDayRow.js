import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';

const ProductsTransferTableRow = props => {
    const {data, onSelect, USA} = props;
    const date = moment(data.sold_at).format("DD-MM-YYYY HH:mm");
    return (
        (data && data.brand) ?
        <TableRow>
            <Cell onClick={() => onSelect(data.product_id)}>{data.sum_id}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.model}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.product.type.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.size.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.color.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{date}</Cell>
            <Cell>{`${data.product.price_arrival} грн.  (${(data.product.price_arrival / USA).toFixed(1)} $)`}</Cell>
            <Cell>{`${data.product.price_sell} грн.  (${(data.product.price_sell / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
            : <td>123</td>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductsTransferTableRow))