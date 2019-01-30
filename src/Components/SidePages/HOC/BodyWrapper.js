import React from 'react'

export default RowComponent => props => {
    const { data } = props
    return (
        <div>
            {
                !Object.keys(data).length
                    ? (
                        <h2>Empty row</h2>
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

        </div>
    )
}