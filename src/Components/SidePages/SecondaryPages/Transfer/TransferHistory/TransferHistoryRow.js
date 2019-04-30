import React from 'react';
import moment from 'moment';
import { dateFormat } from '../../../../../Constants';
import Badge from 'react-bootstrap/Badge';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';

const ProductsTransferTableRow = props => {
    const {data, onSelect} = props;
    const date = moment(data.updated_at, dateFormat).format("YYYY-MM-DD HH:mm");
    const isSuccess = !!data.status;
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
            <Cell>
                <Badge pill variant={isSuccess ? 'success' : 'warning'} >{isSuccess ? 'Принято' : 'Ожидание'}</Badge>
            </Cell>
        </TableRow>
    )
}


export default RowWrapper(ProductsTransferTableRow)