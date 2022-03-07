import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cleanBlack);
    border: 2px solid var(--darkOrange);
    width: 300px;
    height: 200px;
    padding-top: 15px;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .icon{
            color: var(--darkOrange);
        }
        h2{
            font-size: 20px;
            font-weight: bold;
            font-family: 'Inter' , sans-serif;
            color: var(--darkOrange);
        }
    }
    h1{
        font-size: 24px;
        font-family: 'Fira Sans Condensed' , sans-serif;
        padding-bottom: 10px;
        color: var(--midBrown);
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
    @media screen and (min-width:480px){
        width: 450px;
    }
    @media screen and (min-width: 768px){
        margin-top:43px;
        width: 350px;
    }
`   