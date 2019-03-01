import styled from 'styled-components'
import { textBordered } from '../../Mixins'

export const AccordionWrapper = styled.div`
    border-radius: 5px;
    border: 1px solid #d9d9d9;
`;

export const AccordionItemWrapper = styled.div`
    &:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    };
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
`;

export const Title = styled.button`
    background-color: ${props => props.theme.secondary};
    color: #fff;
    ${textBordered};
    cursor: pointer;
    padding: 5px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    font-size: 18px;
    &:after {
        content: ${props => props.active ? "'\\02795'" : "'\\2796'"};
        font-size: 13px;
        color: #777;
        float: right;
        margin-left: 5px;
    }
`

export const Panel = styled.div`
    max-height: ${props => props.active ? '500px' : '0'};
    transition: ${props => props.active ? 'max-height 0.25s ease-in' : 'max-height 0.15s ease-out'};
    overflow: hidden;
`