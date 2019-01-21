import React from 'react'

export default RowComponent => props => {
    const { data } = props
    return (
        <div> /* Table */
            {
                !data.length
                    ? (
                        <h2>Empty row</h2>
                    )
                    : data.map(dataObj => {
                        return (
                            <RowComponent
                                key={dataObj.id}
                                data={dataObj}
                                showSidebar={props.showSidebar}
                                menuActions={props.menuActions}
                            />
                        )
                    })
            }
        </div>
    )
}