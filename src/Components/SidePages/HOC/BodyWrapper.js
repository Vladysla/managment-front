import React from 'react'

import {
    Table,
    TBody,
    Row,
    Cell
} from '../../Table'

export default RowComponent => props => {
    const { data } = props
    return (
        <Table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Info</th>
                </tr>
            </thead>
            <TBody>
                {
                    !Object.keys(data).length
                        ? (
                            <Row>Empty row</Row>
                        )
                        : Object.keys(data).map((key) => {
                            return (
                                <RowComponent
                                    key={key}
                                    data={data[key]}
                                    showSidebar={props.showSidebar}
                                    menuActions={props.menuActions}
                                />
                            )
                        })
                }
            </TBody>
        </Table>
    )
}