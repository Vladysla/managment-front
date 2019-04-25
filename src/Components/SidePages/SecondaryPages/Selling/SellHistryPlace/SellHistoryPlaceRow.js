import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { WrappedLink } from './Components';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';

const ProductsTransferTableRow = props => {
    const {data, USA} = props;
    const date = moment(data.sold_at).format("YYYY.MM.DD");
    return (
        <TableRow>
            <Cell><WrappedLink to={`/sell/${date}`}>{data.sum_id}</WrappedLink></Cell>
            <Cell><WrappedLink to={`/sell/${date}`}>{date}</WrappedLink></Cell>
            <Cell>{`${data.sum_price} грн.  (${(data.sum_price / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
}

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
})

export default RowWrapper(connect(mapStateToProps, null)(ProductsTransferTableRow))