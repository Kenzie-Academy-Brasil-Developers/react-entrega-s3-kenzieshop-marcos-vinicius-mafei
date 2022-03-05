import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 40px;
    right: -10px;
    width: 280px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: var(--cleanBlack);
    ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
        list-style: none;
        align-items: center;
        li{
            width: 80%;
        }
    }
    @media screen and (min-width:900px){
        width: 300px;
    }
`