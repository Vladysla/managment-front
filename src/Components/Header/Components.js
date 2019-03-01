import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'

import {
    mainTransition
} from '../../Mixins'

export const CustomNavbar = styled(Navbar)`
  ${mainTransition};
`;

export const LeftPart = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    height: 35px;
    justify-content: space-around;
`