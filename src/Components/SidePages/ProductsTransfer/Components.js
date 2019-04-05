import styled from 'styled-components';
import {
    Cell
} from '../../Table'

export const CheckedCell = styled(Cell)`
  width: 50px !important;
  &>div>label {
    height: 24px;
    width: 100%;
    cursor: pointer;
  }
`;