import styled from "styled-components";

export const CardLeft = styled.div`
    background-color: #fff;
    height: 100%;
    width: 40%;
    &>img{
        height: 100%;
        width: 100%;
    }
`;

export const CardRight = styled.div`
    background-color: ${props => props.theme.primary};
    padding: 25px;
    color: #fff;
    width: 55%;
`;

export const CardHead = styled.div`

`;

export const TypeH = styled.h5`
    margin: 0;
    color: ${props => props.theme.secondary};
`;

export const TitleH = styled.h2`
    margin-bottom: 0;
    color: #fff;
`;

export const Model = styled.span`
    color: ${props => props.theme.secondary};
`;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceTitle = styled.span`
    color: ${props => props.theme.secondary};
    font-size: 17px;
`;

export const PriceValue = styled.span`
    font-size: 1.6rem;
    font-style: italic;
    margin: 0 10px;
    color: #fff;
`;

export const PriceUE = styled.span`
    font-size: 23px;
    color: ${props => props.theme.secondary};
`;

export const TabsWrapper = styled.div`
    width: 100%;
`;

export const TabsHead = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgb(228, 228, 228);
    list-style: none;
    margin: 0px;
    padding: 0px 0px 10px;
`;

export const TabItem = styled.li`
    margin-right: 45px;
    font-size: 17px;
    color: ${props => props.theme.secondary};
    font-weight: bold;
    cursor: pointer;
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${props => props.theme.secondary};
        transform: translateY(12px) scale(${props => props.active ? '1': '0'});
        transition: all 0.2s ease 0s;
        border-radius: 10px;
    }
`

export const TabText = styled.span`
    font-size: 17px;
    color: ${props => props.theme.secondary};
    font-weight: bold;
    cursor: pointer;
`;

export const TabsBody = styled.div`
    padding: 10px;
`;

export const Places = styled.div`
    
`;

export const PlaceTitle = styled.span`
    color: darkgrey;
    font-size: 23px;
`;

export const PlaceCount = styled.span`
    color: #fff;
    font-size: 20px;
`;