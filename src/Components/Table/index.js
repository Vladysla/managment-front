import styled from 'styled-components';
import BootsButton from 'react-bootstrap/Button'
import BootsForm from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import {
    mainTransition,
    liteWite
} from '../../Mixins'

export const EmptyRow = styled.td`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    overflow: hidden;
    &:before, &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        width: 1%;
        margin: 0 15px;
        height: 2px;
        background: aliceblue;
    };
    &:before {
        margin-left: -100%;
    };
    &:after {
        margin-right: -100%;
    }
`;

export const TableRow = styled.tr`
    cursor: pointer;
`;

export const TableHead = styled.th`
    cursor: pointer;
    min-width: 112px;
    &:hover {
        background-color: rgba(0,0,0,.07);
        &>span{
            text-decoration-line: underline;
        }
    };
    ${mainTransition};
    @media(max-width: 940px) {
      && {
        padding: .75rem 5px;
      }
    }
`;

export const Row = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const THLable = styled.span`
    margin-right: 15px;
    color: ${props => props.theme.secondary};
`;

export const Cell = styled.td`
    position: relative;
    ${props => props.isOptions 
    && `
        display: flex;
        flex-direction: column;
    `};
`;

export const ImageCell = styled(Cell)`
  && {
      width: 150px;
      & > img {
          height: 100px;
          width: 150px;
      }
      @media(max-width: 940px) {
        padding: 0;
      }
  }
`;

export const Button = styled(BootsButton)`
    color: ${props => props.theme.secondary};
    border-color: ${props => props.theme.secondary};
    font-weight: bold !important;
    &:hover {
        background-color: ${props => props.theme.secondaryRGBA};
        color: #fff !important;
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem rgba(27, 210, 255, .15) !important;
    }
    ${props => props.forsearch &&
    `   position: absolute;
        right: 0;`}
`;

export const OptionButton = styled(BootsButton)`
    font-weight: bold !important;
`;


export const Form = styled(BootsForm)`
    align-self: flex-end;
    margin-bottom: 15px;
    position: relative;
    
    & input[type='text'].search-input {
      margin: 0 !important;
    }
`;

export const FormInput = styled(FormControl)`
    padding-right: 85px !important;
    width: 250px !important;
    background-color: ${liteWite};
    &:focus {
        border-color: ${props => props.theme.secondary};
        box-shadow: 0 0 0 0.2rem rgba(27, 210, 255, .15) !important;
    }
    @media(max-width: 360px) {
        width: 230px !important;
    }
    @media(max-width: 330px) {
        width: 210px !important;
    }
`;