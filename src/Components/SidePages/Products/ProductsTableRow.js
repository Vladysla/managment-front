import React from 'react'

import RowWrapper from '../HOC/RowWrapper'

import {
    ProductDefaultRow,
    ProductMainCell
} from './ProductsComponents'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu, onSelect} = props;
    return (
            <ProductDefaultRow onClick={() => onSelect(data.product_id)}>
                <ProductMainCell>{data.brand}</ProductMainCell>
                <ProductMainCell>{data.model}</ProductMainCell>
                <ProductMainCell>{data.type_name}</ProductMainCell>
                <ProductMainCell>{data.price_arrival}</ProductMainCell>
                <ProductMainCell>{data.price_sell}</ProductMainCell>
                <ProductMainCell>{data.total_count}</ProductMainCell>
                <ProductMainCell>{data.sold_count}</ProductMainCell>
                <ProductMainCell>{data.avilable_count}</ProductMainCell>
            </ProductDefaultRow>
    )
}

export default RowWrapper(ProductTableRow)