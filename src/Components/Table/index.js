import styled from 'styled-components';
import BootsButton from 'react-bootstrap/Button'
import BootsForm from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import {
    secondaryColor,
    secondaryColorRGBA,
    mainTransition,
    liteWite,
    mainShadow
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
    min-width: 172px;
    &:hover {
        background-color: rgba(0,0,0,.07);
        &>span{
            text-decoration-line: underline;
        }
    };
    ${mainTransition};
`

export const Row = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const THLable = styled.span`
    margin-right: 15px;
    color: ${secondaryColor};
`;

export const Cell = styled.td`
    min-width: 160px;
`;

export const Button = styled(BootsButton)`
    color: ${secondaryColor};
    border-color: ${secondaryColor};
    font-weight: bold !important;
    &:hover {
        background-color: ${secondaryColorRGBA};
        color: #fff !important;
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem rgba(27, 210, 255, .15) !important;
    }
    position: absolute;
    right: 0;
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
        border-color: ${secondaryColor};
        box-shadow: 0 0 0 0.2rem rgba(27, 210, 255, .15) !important;
    }
    @media(max-width: 360px) {
        width: 230px !important;
    }
    @media(max-width: 330px) {
        width: 210px !important;
    }
`;