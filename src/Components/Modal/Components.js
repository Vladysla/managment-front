import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, .5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  z-index: 20;
  background-color: #fff;
  padding: 50px;
`;