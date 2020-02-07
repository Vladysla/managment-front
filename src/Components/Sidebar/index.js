import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { BackArrow } from '../Icons';
import { WarningIcon } from '../Icons';

import paths from './paths';

import {
    Wrapper,
    ListGroupWrapper,
    ListGroupItemWrapper,
    SecondarySidebar
} from './Components'

const Sidebar = ({ hideSidebar, isSidebarShown, logout, location, userRole, transferCount, theme }) => {

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
                    <ListGroupItemWrapper variant={theme} action onClick={logout}>Cras justo odio</ListGroupItemWrapper>
                    {
                        paths.default.map((item, index) => {
                            if (userRole === 'manager' && item.protectedBy === 'admin') {
                                return null;
                            }
                            return (
                                <Link key={index} to={item.link} onClick={e => toggleSecondarySidebar(e, item.link)}>
                                    <ListGroupItemWrapper
                                        variant={theme}
                                        action
                                        active={(item.link !== '/') && location.pathname.includes(item.link)}
                                    >
                                        {item.name}
                                        {(transferCount && item.name === 'Перемещение') ? (
                                            <WarningIcon fill="#ff6423" width="25" height="25" style={{ float: 'right' }}/>
                                        ) : null}
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
                            variant={theme}
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
                                            variant={theme}
                                            action
                                            active={location.pathname === item.link}
                                            onClick={() => setTimeout(hideSidebar, 0)}
                                        >
                                            {item.name}
                                            {(transferCount && item.name === 'Входящие перемещения') ? (
                                                <Badge
                                                    style={{
                                                        float: 'right',
                                                        fontSize: '16px'
                                                    }}
                                                    variant="primary"
                                                >
                                                    {transferCount}
                                                </Badge>
                                            ) : null}
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