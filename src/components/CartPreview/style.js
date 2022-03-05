import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 40px;
    right: -9px;
    width: 280px;
    padding-top: 10px;
    background-color: var(--cleanBlack);
    border: 2px solid var(--darkOrange);
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        align-items: center;
        li{
            width: 100%;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid var(--lightOrange);
            padding-bottom:10px;
        }
    }
    .full--cart{
        width: 100%;
        border: 0;
        height:30px;
        background-color: var(--strongYellow);
        font-weight: bold;
        text-transform: uppercase;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-size:16px;
    }
    @media screen and (min-width:900px){
        width: 300px;
    }
`