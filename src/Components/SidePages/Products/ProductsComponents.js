import styled from 'styled-components'

import {
    Row,
    Cell
} from '../../Table'

export const ProductDefaultRow = styled(Row)`
  cursor: pointer;
  &:hover{
    background-color: rgba(178, 179, 181, 0.3);
  }
`;

export const ProductMainCell = styled(Cell)``;