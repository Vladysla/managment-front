import styled from 'styled-components'

export const Table = styled.table`
    display: flex;
    flex-flow: column nowrap;
    font-size: 16px;
    margin: 0.5rem;
    flex: 1 1 auto;
    border: 1px solid #cecccc;
    
    @media (max-width: 767px) {
        overflow-x: auto;
    }
`;

export const THead = styled.thead`
    display: flex;
    background-color: rgb(50, 56, 62);
    color: #fff;
    height: 40px;
    align-items: center;
`;

export const TBody = styled.tbody`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeadRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const HeadCell = styled.th`
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    border-left: 1px solid #cecccc;
    padding-left: 15px;
`;

export const Row = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Cell = styled.td`
  padding: 8px 10px;
  width: 100%;
  border: 1px solid #cecccc;
`;