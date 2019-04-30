import React from 'react';
import Check from 'react-bootstrap/FormCheck';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';
import {
    CheckedCell
} from './Components'

const ProductsTransferTableRow = props => {
    const {data, onSelect} = props;
    const isChecked = props.checkedProducts.includes(data.sum_id)
    return (
        <TableRow>
            <CheckedCell>
                <Check
                    type="checkbox"
                    custom
                    label={data.sum_id}
                    id={data.sum_id}
                    checked={isChecked}
                    onChange={() => props.setChecked(data.sum_id)}
                />
            </CheckedCell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.brand}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.model}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.type.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.color.name}</Cell>
            <Cell onClick={() => onSelect(data.product_id)}>{data.size.name}</Cell>
        </TableRow>
    )
}


export default RowWrapper(ProductsTransferTableRow)