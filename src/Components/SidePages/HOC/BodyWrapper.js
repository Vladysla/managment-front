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
        <Table striped bordered hover variant="dark" responsive>
            <thead>
            <tr>
                {
                    Object.keys(options.tHead).map(headKey => {
                        return <TableHead
                            key={headKey}
                            onClick={() => handleOrderClick(options.tHead[headKey].sortable, headKey)}
                            width={"selected" in options.tHead[headKey] ? 1 : 0}
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
                        <tr><EmptyRow colSpan="100">Товаров нет</EmptyRow></tr>
                    )
                    : data && data.map(product => {
                        return (
                            <RowComponent
                                key={product[options.key]}
                                data={product}
                                showSidebar={props.showSidebar}
                                menuActions={props.menuActions}
                                onSelect={props.onSelect}
                                setChecked={props.setChecked}
                                checkedProducts={props.checkedProducts}
                                USA={props.USA}
                            />
                        )
                    })
            }
            </tbody>
        </Table>
    )
}