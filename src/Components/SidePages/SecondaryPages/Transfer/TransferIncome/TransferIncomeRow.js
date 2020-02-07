import React from 'react';
import { connect } from 'react-redux';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell,
    OptionButton
} from '../../../../Table';

import {
    applyTransfer,
    cancelTransfer
} from '../../../../../Store/Modules/SeparatedProductsStorage/actions'

const TransferIncomeRow = props => {

    const transferApply = (id) => {
        props.applyTransfer(id)
    };

    const transferCancel = (id) => {
        props.cancelTransfer(id)
    };

    const {data, onSelect} = props;
    return (
        <TableRow>
            <Cell isOptions>
                <OptionButton onClick={() => transferApply(data.id)} variant="outline-success" className="mb-2" >Принять</OptionButton>
                <OptionButton onClick={() => transferCancel(data.id)} variant="outline-danger" >Отклонить</OptionButton>
            </Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.from_place.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.model}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.product.type.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.size.name}</Cell>
            <Cell onClick={() => onSelect(data.product_sum_transfer.product_id)}>{data.product_sum_transfer.color.name}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

const mapDispatchToProps = {
    applyTransfer,
    cancelTransfer
}

export default RowWrapper(connect(mapStateToProps, mapDispatchToProps)(TransferIncomeRow))