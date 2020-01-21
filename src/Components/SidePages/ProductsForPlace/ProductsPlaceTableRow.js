import React from 'react'

import RowWrapper from '../HOC/RowWrapper'

import {
    TableRow,
    Cell,
    ImageCell
} from "../../Table"
import { getImage } from '../../../API';

const ProductForPlaceTableRow = props => {
    const {data, onSelect} = props;
    return (
        <TableRow onClick={() => onSelect(data.product_id)}>
            <ImageCell>
                <img src={getImage(data.photo)} alt="Product detail"/>
            </ImageCell>
            <Cell>{data.brand}</Cell>
            <Cell>{data.model}</Cell>
            <Cell>{data.type_name}</Cell>
            <Cell>{data.total_count}</Cell>
            <Cell>{data.sold_count}</Cell>
            <Cell>{data.avilable_count}</Cell>
        </TableRow>
    )
}


export default RowWrapper(ProductForPlaceTableRow)