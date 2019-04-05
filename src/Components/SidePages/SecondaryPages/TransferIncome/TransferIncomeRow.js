import React from 'react';
import { connect } from 'react-redux';

import RowWrapper from '../../HOC/RowWrapper';

import {
    TableRow,
    Cell,
    TransferButton
} from '../../../Table';

const TransferIncomeRow = props => {
    const {data, onSelect, USA} = props;
    return (
        <TableRow>
            <Cell>
                <TransferButton color="green" colorHover="red">Принять</TransferButton>
                <TransferButton color="red" colorHover="red">Отклонить</TransferButton>
            </Cell>
            <Cell onClick={() => onSelect(data.product_sum.product_id)}>{data.from_place.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum.product_id)}>{data.product_sum.product.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_sum.product_id)}>{data.product_sum.product.model}</Cell>
            <Cell onClick={() => onSelect(data.product_sum.product_id)}>{data.product_sum.size.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum.product_id)}>{data.product_sum.color.name}</Cell>
            <Cell>{`${data.product_sum.product.price_arrival} грн.  (${(data.product_sum.product.price_arrival / USA).toFixed(1)} $)`}</Cell>
            <Cell>{`${data.product_sum.product.price_sell} грн.  (${(data.product_sum.product.price_sell / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(TransferIncomeRow))