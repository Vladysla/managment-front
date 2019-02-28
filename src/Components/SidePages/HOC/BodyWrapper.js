import React from 'react'
import Table from 'react-bootstrap/Table'

import {
    SortASC,
    SortDESC,
    Loader
} from '../../Icons'
import {
    EmptyRow,
    THLable,
    TableHead
} from '../../Table'


export default RowComponent => props => {
    const { data, options, orderBy, orderHandler, productsIsLoading } = props;

    const renderSortIcon = headKey => {
        if ((orderBy === headKey) && props.orderAsc) {
            return <SortASC height="18px" />
        }

        return <SortDESC height="18px" />
    }

    const handleOrderClick = (isSortable, orderKey) => {
        if (isSortable) {
            orderHandler(orderKey);
        }
    };

    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                {
                    Object.keys(options.tHead).map(headKey => {
                        return <TableHead
                            key={headKey}
                            onClick={() => handleOrderClick(options.tHead[headKey].sortable, headKey)}
                        >
                            <THLable>{options.tHead[headKey].label}</THLable>
                            { options.tHead[headKey].sortable && renderSortIcon(headKey) }
                        </TableHead>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                productsIsLoading && <Loader  />
            }
            {
                (!data.length && !productsIsLoading)
                    ? (
                        <tr><EmptyRow colSpan="100">Empty row</EmptyRow></tr>
                    )
                    : data.map(product => {
                        return (
                            <RowComponent
                                key={product.product_id}
                                data={product}
                                showSidebar={props.showSidebar}
                                menuActions={props.menuActions}
                                onSelect={props.onSelect}
                            />
                        )
                    })
            }
            </tbody>
        </Table>
    )
}