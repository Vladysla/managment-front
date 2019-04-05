import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'

import {
    mainTransition
} from '../../Mixins'

export const Wrapper = styled.div`
    margin-top: 52px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 265px;
    height: 100%;
    ${mainTransition};
    transform: translate3d(${props => props.isSidebarShown ? 0 : '-100%'}, 0, 0);
    background-color: ${props => props.theme.primary};
    
    @media( max-width: 500px ) {
      width: 100%;
    }
`;

export const ListGroupWrapper = styled(ListGroup)`
    
`;

export const ListGroupItemWrapper = styled(ListGroup.Item)`
    &:first-child, &:last-child {
        border-radius: 0 !important;
    }
`;

export const SecondarySidebar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
`;