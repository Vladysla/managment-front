import React, {Component} from 'react';

import {
    Wrapper,
    SidebarOverlay
} from './Components'

class Sidebar extends Component {

    render() {
        return (
            <Wrapper isSidebarShown={this.props.isSidebarShown}>
                Sidebar
                <SidebarOverlay isSidebarShown={this.props.isSidebarShown}/>
            </Wrapper>
        );
    }
}

export default Sidebar;