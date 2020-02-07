import styled from 'styled-components';
import {
    liteWite
} from '../../../Mixins'

export const Wrapper = styled.form`
    color: ${liteWite};
`;

export const ProductWrapper = styled.div`
    width: 100%;
    padding: 20px;
`;

export const AutoCompleteMenu = styled.div`
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  width: 16%;
  max-height: 25%;
  overflow-y: auto;
  background-color: ${props => props.theme.primary};
  border: 1px solid #cccccc;
`;