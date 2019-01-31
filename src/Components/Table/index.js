import styled from 'styled-components'

export const Table = styled.table`
    display: flex;
    flex-flow: column nowrap;
    font-size: 0.8rem;
    margin: 0.5rem;
    flex: 1 1 auto;
    
    @media (max-width: 767px) {
        overflow-x: auto;
    }
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
    flex-flow: row nowrap;
`;

export const Row = styled(HeadRow)`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    background: #f2f4f7;
    
    &:nth-child(even) {
        background: #fff;
    }
`;

export const Cell = styled.td`
  
`;