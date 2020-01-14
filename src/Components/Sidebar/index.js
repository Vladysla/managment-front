import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BackArrow } from '../Icons';

import paths from './paths';

import {
    Wrapper,
    ListGroupWrapper,
    ListGroupItemWrapper,
    SecondarySidebar
} from './Components'

const Sidebar = ({ hideSidebar, isSidebarShown, logout, location, userRole }) => {

    const [ isSecondaryOpen, setSecondaryOpen ] = useState(false);

    const toggleSecondarySidebar = (event, page) => {
        if ( page === 'sell' || page === 'transfer' ) {
            event.preventDefault();
            setSecondaryOpen(page)
            return
        }
        setTimeout(hideSidebar, 0)
    }

    return (
        <Wrapper isSidebarShown={isSidebarShown}>
            {
                !isSecondaryOpen &&
                <ListGroupWrapper>
                    <ListGroupItemWrapper variant="dark" action onClick={logout}>Cras justo odio</ListGroupItemWrapper>
                    {
                        paths.default.map((item, index) => {
                            if (userRole === 'manager' && item.protectedBy === 'admin') {
                                return null;
                            }
                            return (
                                <Link key={index} to={item.link} onClick={e => toggleSecondarySidebar(e, item.link)}>
                                    <ListGroupItemWrapper
                                        variant="dark"
                                        action
                                        active={(item.link !== '/') && location.pathname.includes(item.link)}
                                    >
                                        {item.name}
                                    </ListGroupItemWrapper>
                                </Link>
                            );
                        })
                    }
                </ListGroupWrapper>
            }
            {
                isSecondaryOpen &&
                    <SecondarySidebar>
                        <ListGroupItemWrapper
                            variant="dark"
                            action
                            onClick={() => setSecondaryOpen(false)}
                        >
                            <BackArrow width="27px" />
                        </ListGroupItemWrapper>
                        {
                            paths[isSecondaryOpen].map((item, index) => {
                                if (userRole === 'manager' && item.protectedBy === 'admin') {
                                    return null;
                                }

                                return (
                                    <Link key={index} to={item.link}>
                                        <ListGroupItemWrapper
                                            variant="dark"
                                            action
                                            active={location.pathname === item.link}
                                            onClick={() => setTimeout(hideSidebar, 0)}
                                        >
                                            {item.name}
                                        </ListGroupItemWrapper>
                                    </Link>
                                );
                            })
                        }
                    </SecondarySidebar>
            }
        </Wrapper>
    );
}

export default withRouter(Sidebar);