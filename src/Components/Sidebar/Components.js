import styled from 'styled-components'

import {
    darkBlue,
    mainTransition
} from '../../Mixins'

export const Wrapper = styled.div`
    position: fixed;
    top: 64px;
    left: 0;
    width: 225px;
    padding: 15px 20px;
    background-color: ${darkBlue};
    height: 400px;
    ${mainTransition};
    transform: translate3d(${props => props.isSidebarShown ? 0 : '-100%'}, 0, 0);
`;

export const SidebarOverlay = styled.div`
    display: ${props => props.isSidebarShown ? 'block' : 'none'};
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 5px;
    left: 265px;
    background-color: rgba(0,0,0, .03);
    ${mainTransition};
    transform: translate3d(${props => props.isSidebarShown ? 0 : '-100%'},0,0);
`