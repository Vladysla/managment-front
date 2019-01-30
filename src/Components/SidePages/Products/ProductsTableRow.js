import React from 'react'

import RowWrapper from '../HOC/RowWrapper'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu} = props;
    return (
        <div>
            {data.info.model}
            <div>
                {
                    Object.keys(data.places).map((key, index) => {
                        return <div key={key}>
                                    {key}
                                    <hr/>
                                    {Object.keys(data.places[key]).map(key => {
                                        return <div key={key}>
                                            {key}
                                        </div>
                                    })}
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default RowWrapper(ProductTableRow)