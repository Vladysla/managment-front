import React from 'react'
import _ from 'lodash'

import RowWrapper from '../HOC/RowWrapper'

const ProductTableRow = props => {
    const {data, hasActionsMenuOpened, openActionsMenu} = props;
    console.log(data);
    return (
        <div>
            {data.info.model}
            <div>
                {
                    Object.keys(data.places).map((key, index) => {
                        return <div>
                                    {key}
                                    <hr/>
                                    {Object.keys(data.places[key]).map(key => {
                                        return <div>
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