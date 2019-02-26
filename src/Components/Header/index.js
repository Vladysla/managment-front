import React from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'

import {
    showSidebar,
    hideSidebar
} from '../../Store/Modules/LocalSettings/actions'

import {
    CustomNavbar,
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
            <CustomNavbar active={props.isSidebarShown} bg="dark">
                <CustomNavbar.Brand href="#home">
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
                </CustomNavbar.Brand>
                {/*<LeftPart>
                <Logo/>
            </LeftPart>*/}
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