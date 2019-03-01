import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import { mainTransition } from '../Mixins'

export const ComponentWrapper = styled.div`
  padding: 25px;
  margin-left: ${props => props.isSidebarShown ? '265px' : 0};
  ${mainTransition};
  @media(max-width: 1380px) {
      margin-left: 0;
  }
`;

export const ContainerWrapper = styled(Container)`
  margin-top: 50px;
`;