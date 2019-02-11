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
    background-color: #2d2e32;
    padding: 25px;
    color: #fff;
    width: 55%;
`;

export const CardHead = styled.div`

`;

export const TypeH = styled.h5`
    margin: 0;
    color: #46beff;
`;

export const TitleH = styled.h2`
    margin-bottom: 0;
    color: #fff;
`;

export const Model = styled.span`
    color: darkgrey;
`;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceTitle = styled.span`
    color: darkgrey;
    font-size: 17px;
`;

export const PriceValue = styled.span`
    font-size: 30px;
    font-style: italic;
    margin: 0 10px;
    color: #fff;
`;

export const PriceUE = styled.span`
    font-size: 23px;
    color: darkgrey;
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
    color: rgb(69, 90, 100);
    font-weight: bold;
    cursor: pointer;
    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: rgb(69, 90, 100);
        transform: translateY(12px) scale(${props => props.active ? '1': '0'});
        transition: all 0.2s ease 0s;
        border-radius: 10px;
    }
`

export const TabText = styled.span`
    font-size: 17px;
    color: rgb(69, 90, 100);
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