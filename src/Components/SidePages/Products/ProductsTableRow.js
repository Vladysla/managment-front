import React from 'react'

import RowWrapper from '../HOC/RowWrapper'

import {
    ProductDefaultRow,
    ProductMainCell
} from './ProductsComponents'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu} = props;
    return (
        <ProductDefaultRow>
            <ProductMainCell>{data.info.brand}</ProductMainCell>
            <ProductMainCell>{data.info.model}</ProductMainCell>
            <ProductMainCell>
                {
                    Object.keys(data.places).map((keyPlace) => {
                        return <div key={keyPlace}>
                                    {keyPlace}
                                    {Object.keys(data.places[keyPlace]).map(keySize => {
                                        return <div key={keySize}>
                                            {keySize}
                                            {Object.keys(data.places[keyPlace][keySize]).map(keyColor => {
                                                return <div key={keyColor}>
                                                    {`${keyColor}: ${data.places[keyPlace][keySize][keyColor]}`}
                                                </div>
                                            })}
                                        </div>
                                    })}
                                </div>
                    })
                }
            </ProductMainCell>
        </ProductDefaultRow>
    )
}

export default RowWrapper(ProductTableRow)