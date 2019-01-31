import styled from 'styled-components'

import {
    lightBlue,
    mainShadow
} from '../../Mixins'

export const HeaderWrapper = styled.div`
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      height: 65px;
      right: 0;
      background-color: ${lightBlue};
      ${mainShadow};
      padding: 0 35px;
      align-items: center;
`;

export const LeftPart = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
`