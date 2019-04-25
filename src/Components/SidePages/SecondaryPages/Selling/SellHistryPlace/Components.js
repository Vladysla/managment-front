import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrappedLink = styled(NavLink)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-left: 12px;
    padding-top: 12px;
    display: block;
    color: inherit;
    &:hover {
        color: inherit;
        text-decoration: none;
    }
`;