import React, {Component} from 'react';

import {
    Wrapper
} from './Components'

class Sidebar extends Component {

    render() {
        return (
            <Wrapper isSidebarShown={this.props.isSidebarShown}>
                Sidebar
            </Wrapper>
        );
    }
}

export default Sidebar;