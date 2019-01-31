import styled from 'styled-components'

import { mainTransition } from '../Mixins'

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  margin-top: 64px;
`;

export const ComponentWrapper = styled.div`
  padding: 25px;
  margin-left: ${props => props.isSidebarShown ? '265px' : 0};
  ${mainTransition};
`;