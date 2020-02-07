import styled from 'styled-components';

import { setSecondaryColorRGBA } from '../../Mixins';

export const Wrapper = styled.div`
  bottom: ${props => props.top ? '16%' : '1%'};
  right: 4%;
  position: fixed;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 1px 1px 18px 6px ${props => props.theme.primary};
`;

export const Svg = styled.svg`
  position: absolute;
  top: -8px;
  left: -8px;
`;

export const CircleSvg = styled.circle`
  transition: .3s;
  stroke: ${props => props.theme.secondary};
`;

export const Button = styled.button`
  border: none;
  background: #6c757d;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const ChevronTop = styled.span`
  &:before {
    transition: border-color .4s;
    border-style: solid;
    border-width: 6px 6px 0 0;
    border-color: ${props => props.progress < 50 ? props.theme.primary : setSecondaryColorRGBA(`.${props.progress}`)};
    content: '';
    display: inline-block;
    height: 20px;
    left: 0;
    position: relative;
    top: 5px;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 20px;
  }
`;

export const ChevronBottom = styled.span`
  &:before {
    border-style: solid;
    border-width: 6px 6px 0 0;
    border-color: ${props => props.theme.primary};
    content: '';
    display: inline-block;
    height: 20px;
    left: 0;
    position: relative;
    top: 0;
    transform: rotate(135deg);
    vertical-align: top;
    width: 20px;
  }
`;
