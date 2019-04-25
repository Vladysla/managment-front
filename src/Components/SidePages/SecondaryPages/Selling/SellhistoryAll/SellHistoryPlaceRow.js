import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';
import {
    WrappedLink
} from '../SellHistryPlace/Components'

const ProductsTransferTableRow = props => {
    const {data, USA} = props;
    const date = moment(data.sold_at).format("YYYY.MM.DD");
    const linkParams = {
        pathname: `/sell/day/${date}`,
        state: { place: data.id }
    };
    return (
        <TableRow>
            <Cell><WrappedLink to={linkParams}>{data.sum_id}</WrappedLink></Cell>
            <Cell><WrappedLink to={linkParams}>{date}</WrappedLink></Cell>
            <Cell><WrappedLink to={linkParams}>{data.name}</WrappedLink></Cell>
            <Cell>{`${data.sum_price} грн.  (${(data.sum_price / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
};

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
});

export default RowWrapper(connect(mapStateToProps, null)(ProductsTransferTableRow))