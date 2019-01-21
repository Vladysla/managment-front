import React from 'react'

import RowWrapper from '../HOC/RowWrapper'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu} = props;
    return (
        <div>
            {data.model}
        </div>
    )
}

export default RowWrapper(ProductTableRow)