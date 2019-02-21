import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, .6);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.div`
    z-index: 20;
    background-color: #2d2e32;
    width: 90vw;
    height: 75vh;
    display: flex;
    box-shadow: 1px 1px 20px 2px #333333;
`;