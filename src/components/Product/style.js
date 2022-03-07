import styled from 'styled-components'

export const Container = styled.div`
    width: 280px;
    height: 410px;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-image-source: ${props=> `url(${props.ProductBorder})`};
    border-image-width:20px 40px;
    border-image-repeat: round;
    border-image-slice: 30 50 fill;
    padding: 10px;
    figure{
        width: 99%;
        background-color: var(--cleanBlack);
        img{
            width: 100%;
            height: 280px;
            border-bottom: 2px solid var(--brown);
        }
    }
    div{
        padding-left: 10px;
        padding-top: 10px;
        background-color: var(--cleanBlack);
        width: 99%;
        text-align: left;
        height:70px;
        display: flex;
        flex-direction: column;
        gap:5px;
        h3{
            font-size:20px;
            color: var(--darkOrange);
            font-family: 'Fira Sans Condensed', sans-serif;
        }
        h4{
            font-size:16px;
            color: var(--lightOrange);
            font-family: 'Inter', sans-serif;
        }
    }
    button{
        width: 100%;
        height:40px;
        background-color: var(--strongYellow);
        border:none;
        color: var(--cleanBlack) ;
        text-transform:uppercase;
        font-size:16px ;
        font-weight:bold ;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        transition: 0.6s;
        &:hover{
            background-color: var(--lightOrange);
            transition: 0.6s;
        }
    }
`