import React, { Fragment } from 'react'

import {
    Table,
    THead,
    TBody,
    HeadRow,
    HeadCell
} from '../../Table'

export default RowComponent => props => {
    const { data } = props
    return (
        <Fragment>
            <Table>
                <THead>
                <HeadRow>
                    <HeadCell>Бренд</HeadCell>
                    <HeadCell>Модель</HeadCell>
                    <HeadCell>Тип товара</HeadCell>
                    <HeadCell>Цена товара</HeadCell>
                    <HeadCell>Цена продажи</HeadCell>
                    <HeadCell>Приход</HeadCell>
                    <HeadCell>Продажа</HeadCell>
                    <HeadCell>Остаток</HeadCell>
                </HeadRow>
                </THead>
                <TBody>
                {
                    !data.length
                        ? (
                            <HeadRow>Empty row</HeadRow>
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
                </TBody>
            </Table>
        </Fragment>
    )
}