import styled from 'styled-components'



export const CartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    h1{
        color: var(--darkOrange);
        font-weight: bold;
        font-family: 'Fira Sans Condensed',sans-serif;
    }
    .title{
        display: flex;
        gap:5px;
        align-items: center;
        .icon{
            color: var(--darkOrange);
        }
    }
`

export const Container = styled.div`
    width: 300px;
    padding: 10px;
    background-color:var(--cleanBlack);
    border: 2px solid var(--lightOrange);
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        li:not(li:last-child){
            border-bottom: 1px solid var(--lightOrange);
            padding-bottom: 15px;
        }
    }
    @media screen and (min-width: 480px){
        width: 450px;
        ul{
            align-items: center;
            li{
                width: 80%;
            }
        }
    }
    @media screen and (min-width: 768px){
        width: 350px;
        ul{
            li{
                width: 100%;
            }
        }
    }
    @media screen and (min-width: 900px){
        width: 400px;
        ul{
            li{
                width: 80%;
            }
        }
    }
    @media screen and (min-width: 1000px){
        width: 500px;
        ul{
            li{
                width: 90%;
            }
        }
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