import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 40px;
    right: -9px;
    width: 280px;
    padding-top: 10px;
    background-color: var(--cleanBlack);
    border: 2px solid var(--darkOrange);
    cursor: default;
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
        cursor: pointer;
        transition: 0.6s;
        &:hover{
            background-color: var(--lightOrange);
            transition: 0.6s;
        }
    }
    @media screen and (min-width:900px){
        width: 300px;
    }
`

export const EmptyCart = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 15px;
    font-family: 'Inter', sans-serif;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    padding-bottom:15px;
    h2{
        font-size: 22px;
        color: var(--strongYellow);
    }
    h3{
        font-size: 18px;
        color: var(--darkOrange)
    }
    h4{
        font-size: 15px;
        color: var(--lightOrange)
    }
`