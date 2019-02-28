import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'

import {
    mainTransition
} from '../../Mixins'

export const CustomNavbar = styled(Navbar)`
  ${mainTransition};
  ${props => props.active && `
    margin-left: 265px
  `}
`;

export const LeftPart = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 33px;
    justify-content: space-around;
`