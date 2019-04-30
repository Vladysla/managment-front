import React from 'react';
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
    const linkParams = {
        pathname: `/sell/day/${date}`,
        state: { place: data.id }
    };
    return (
        <TableRow>
            <Cell><WrappedLink to={linkParams}>{data.sum_id}</WrappedLink></Cell>
            <Cell><WrappedLink to={linkParams}>{date}</WrappedLink></Cell>
            <Cell>{`${data.sum_price} грн.  (${(data.sum_price / USA).toFixed(1)} $)`}</Cell>
        </TableRow>
    )
}


export default RowWrapper(ProductsTransferTableRow)