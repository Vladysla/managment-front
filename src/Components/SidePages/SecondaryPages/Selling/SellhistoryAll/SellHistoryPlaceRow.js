import React from 'react';
import DateTime from 'luxon/src/datetime';

import RowWrapper from '../../../HOC/RowWrapper';

import {
    TableRow,
    Cell
} from '../../../../Table';
import {
    WrappedLink
} from '../SellHistryPlace/Components'

import { dateFormatLuxon, dateFormatLuxonFormatedSell } from '../../../../../Constants';

const ProductsTransferTableRow = props => {
    const {data, USA} = props;
    const date = DateTime.fromFormat(data.sold_at, dateFormatLuxon).toFormat(dateFormatLuxonFormatedSell);

    return (
        <TableRow>
            <Cell><WrappedLink to={`/sell/day/${date}/${data.id}`}>{data.sum_id}</WrappedLink></Cell>
            <Cell><WrappedLink to={`/sell/day/${date}/${data.id}`}>{date}</WrappedLink></Cell>
            <Cell><WrappedLink to={`/sell/day/${date}/${data.id}`}>{data.name}</WrappedLink></Cell>
            <Cell>{`${data.sum_price} грн.  (${(data.sum_price / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
};


export default RowWrapper(ProductsTransferTableRow)