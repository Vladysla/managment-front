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
    const date = moment(data.sold_at).format("YYYY.MM.DD");
    return (
        <TableRow>
            <Cell onClick={() => onSelect(data.product_id)}>{data.sum_id}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{date}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.name}</Cell>
            <Cell>{`${data.sum_price} грн.  (${(data.sum_price / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductsTransferTableRow))