import styled from 'styled-components'

export const PaginatorWrapper = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    background-color: #e5e5e5;
    width: 400px;
    padding: 0 20px;
    border-radius: 30px;
    @media(max-width: 500px) {
      width: 310px;
    }
`;

export const Page = styled.li`
    display: flex;
    color: ${props => props.active ? 'white' : 'rgba(31,32,41,0.4)'};
    font-weight: 500;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
    box-shadow: ${props => props.active ? '0px 0px 1px 3px rgba(0, 98, 204, 0.1)' : 'none'};
    background-color: ${props => props.active ? '#29bdfb' : 'transparent'};
    ${props => props.disabled && `
        color: grey
    `}
`;