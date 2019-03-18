import React from 'react'
import { connect } from 'react-redux'

import RowWrapper from '../HOC/RowWrapper'

import {
    TableRow,
    Cell
} from "../../Table"

const ProductForPlaceTableRow = props => {
    const {data, onSelect, USA} = props;
    return (
        <TableRow onClick={() => onSelect(data.product_id)}>
            <Cell>{data.brand}</Cell>
            <Cell>{data.model}</Cell>
            <Cell>{data.type_name}</Cell>
            <Cell>{`${data.price_arrival} грн.  (${(data.price_arrival / USA).toFixed(1)} $)`}</Cell>
            <Cell>{`${data.price_sell} грн.  (${(data.price_sell / USA).toFixed(1)} $)`}</Cell>
            <Cell>{data.total_count}</Cell>
            <Cell>{data.sold_count}</Cell>
            <Cell>{data.avilable_count}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductForPlaceTableRow))