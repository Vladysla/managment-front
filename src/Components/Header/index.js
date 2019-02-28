import React from 'react';
import { connect } from 'react-redux'

import {
    showSidebar,
    hideSidebar
} from '../../Store/Modules/LocalSettings/actions'

import {
    CustomNavbar,
    LeftPart
} from './Components'
import Hamburger from './Hamburger/';

const Header = props => {

    const toggleSidebar = () => {
        if (props.isSidebarShown) {
            props.hideSidebar()
        } else {
            props.showSidebar()
        }
    }

    return (
        <CustomNavbar active={props.isSidebarShown} bg="dark">
            <LeftPart>
                <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <Hamburger active={props.isSidebarShown} onClick={toggleSidebar}/>
            </LeftPart>
        </CustomNavbar>
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