import React from 'react'
import _ from 'lodash'

export default RowComponent => props => {
    const { data } = props
    return (
        <div>
            {
                !_.size(data)
                    ? (
                        <h2>Empty row</h2>
                    )
                    : Object.keys(data).map((key, index) => {
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
        </div>
    )
}