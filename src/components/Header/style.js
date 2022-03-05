import styled from 'styled-components'

export const FancyHeader = styled.header`
    width: 100vw;
    position: fixed;
    background-color: var(--main);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--lightOrange);
    .container{
        display: flex;
        justify-content:space-between;
        width: 90%;
        max-width: 1000px;
        align-items:center;
    }
    img{
        width: 150px;
    }
    nav{
        a{
            text-decoration: none;
            color: var(--lightOrange);
            display: flex;
            align-items:flex-end;
            font-family:'Inter', sans-serif;
            font-weight:bold;
            gap:5px;
        }
    }
`