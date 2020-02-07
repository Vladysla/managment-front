import styled from 'styled-components';

import { mainShadow } from '../../Mixins'

export const ComponentWrapper = styled.div`
    background-color: ${props => props.theme.primary};
    box-shadow: 0 0 5px rgba(15, 20, 23, 0.55);
    padding: 30px;
    ${mainShadow};
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    @media(max-width: 940px) {
      padding: 30px 5px;
    }
`;