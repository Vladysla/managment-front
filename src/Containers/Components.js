import styled from 'styled-components'

import { mainTransition } from '../Mixins'

export const ComponentWrapper = styled.div`
  padding: 25px;
  margin-left: ${props => props.isSidebarShown ? '265px' : 0};
  ${mainTransition};
`;