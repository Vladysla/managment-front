import React from 'react'

export default RowComponent => props => {
    const data = props.data
    const hasActionsMenuOpened = props.hasActionsMenuOpened === data.id
    const openActionsMenu = () => this.props.menuOpenHandler('hasActionsMenuOpened', data.id);

    return (
        <RowComponent
            data={data}
            menuActions={props.menuActions}
            hasActionsMenuOpened={hasActionsMenuOpened}
            openActionsMenu={openActionsMenu}
            showSidebar={props.showSidebar}
            onSelect={props.onSelect}
        />
    )
}