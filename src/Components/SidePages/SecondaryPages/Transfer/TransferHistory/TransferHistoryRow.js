import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { dateFormat } from '../../../../../Constants'

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';

const ProductsTransferTableRow = props => {
    const {data, onSelect, USA} = props;
    const date = moment(data.updated_at, dateFormat).format("YYYY-MM-DD HH:mm");
    return (
        <TableRow>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.from_place.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.to_place.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{date}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.model}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.type.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.color.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.size.name}</Cell>
            <Cell>{`${data.product_sum_transfer.product.price_arrival} грн.  (${(data.product_sum_transfer.product.price_arrival / USA).toFixed(1)} $)`}</Cell>
            <Cell>{`${data.product_sum_transfer.product.price_sell} грн.  (${(data.product_sum_transfer.product.price_sell / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductsTransferTableRow))