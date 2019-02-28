import React from 'react'
import { connect } from 'react-redux'

import RowWrapper from '../HOC/RowWrapper'

import { TableRow } from "../../Table"

const ProductTableRow = props => {
    const {data, onSelect, USA} = props;
    return (
            <TableRow onClick={() => onSelect(data.product_id)}>
                <td>{data.brand}</td>
                <td>{data.model}</td>
                <td>{data.type_name}</td>
                <td>{`${data.price_arrival} грн.  (${(data.price_arrival / USA).toFixed(1)} $)`}</td>
                <td>{`${data.price_sell} грн.  (${(data.price_sell / USA).toFixed(1)} $)`}</td>
                <td>{data.total_count}</td>
                <td>{data.sold_count}</td>
                <td>{data.avilable_count}</td>
            </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductTableRow))