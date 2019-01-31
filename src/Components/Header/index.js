import React from 'react';
import { connect } from 'react-redux'

import {
    showSidebar,
    hideSidebar
} from '../../Store/Modules/LocalSettings/actions'

import {
    HeaderWrapper,
    LeftPart
} from './Components'
import Hamburger from './Hamburger/';
import Logo from './Logo';

const Header = props => {

    const toggleSidebar = () => {
        if (props.isSidebarShown) {
            props.hideSidebar()
        } else {
            props.showSidebar()
        }
    }

    return (
        <HeaderWrapper>
            <LeftPart>
                <Logo/>
                <Hamburger active={props.isSidebarShown} onClick={toggleSidebar}/>
            </LeftPart>
        </HeaderWrapper>
    );
};

const mapStateToProps = state => ({
    isSidebarShown: state.localSettings.isSidebarShown
});

const mapDispatchToProps = dispatch => ({
    showSidebar: (sidebarType, id) => dispatch(showSidebar(sidebarType, id)),
    hideSidebar: () => dispatch(hideSidebar())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);