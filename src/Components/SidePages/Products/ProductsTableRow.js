import React from 'react'
import { connect } from 'react-redux'

import RowWrapper from '../HOC/RowWrapper'

import {
    ProductDefaultRow,
    ProductMainCell
} from './ProductsComponents'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu, onSelect, USA} = props;
    return (
            <ProductDefaultRow onClick={() => onSelect(data.product_id)}>
                <ProductMainCell>{data.brand}</ProductMainCell>
                <ProductMainCell>{data.model}</ProductMainCell>
                <ProductMainCell>{data.type_name}</ProductMainCell>
                <ProductMainCell>{`${data.price_arrival} грн.  (${(data.price_arrival / USA).toFixed(1)} $)`}</ProductMainCell>
                <ProductMainCell>{`${data.price_sell} грн.  (${(data.price_sell / USA).toFixed(1)} $)`}</ProductMainCell>
                <ProductMainCell>{data.total_count}</ProductMainCell>
                <ProductMainCell>{data.sold_count}</ProductMainCell>
                <ProductMainCell>{data.avilable_count}</ProductMainCell>
            </ProductDefaultRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductTableRow))