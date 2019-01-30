import styled from 'styled-components'

export const PaginatorWrapper = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
`

export const Page = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 10px;
    width: 10px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    -webkit-transition: all .4s;
    transition: all .4s;
    box-shadow: 0px 0px 3px 2px rgba(191, 191, 191, 0.66);
    background-color: ${props => props.active ? 'rgba(175,203,239,0.84)' : 'transparent'};
    ${ props => props.disabled && `
        color: grey
    `}
    &:hover {
        background-color: #afcbef66;
    }
`