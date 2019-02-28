import React, {Component} from 'react';

import {
    Wrapper,
    ListGroupWrapper,
    ListGroupItemWrapper
} from './Components'

class Sidebar extends Component {

    render() {
        return (
            <Wrapper isSidebarShown={this.props.isSidebarShown}>
                <ListGroupWrapper>
                    <ListGroupItemWrapper disabled>Cras justo odio</ListGroupItemWrapper>
                    <ListGroupItemWrapper>Dapibus ac facilisis in</ListGroupItemWrapper>
                    <ListGroupItemWrapper>Morbi leo risus</ListGroupItemWrapper>
                    <ListGroupItemWrapper>Porta ac consectetur ac</ListGroupItemWrapper>
                </ListGroupWrapper>
            </Wrapper>
        );
    }
}

export default Sidebar;