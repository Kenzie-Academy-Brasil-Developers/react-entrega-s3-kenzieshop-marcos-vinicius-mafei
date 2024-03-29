import styled from 'styled-components'

export const Container = styled.div`
    padding: 2px;
    position: relative;
    cursor: pointer;
    @keyframes popup{
        from { opacity:0}
        to { opacity:1}
    }
    @keyframes hide{
        from { opacity:1}
        to { opacity:0}
    }
    .cart--counter{
        width: 15px;
        height: 15px;
        position: absolute;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        left:17px;
        bottom: 17px;
        background-color: var(--strongYellow);
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        font-size: 10px;
    }
    .cart{
        color: var(--lightOrange);
    }
    .cart--popup{
        .arrow{
        position: absolute;
        top: 10px ;
        left: -12px;
        .icon{
            color: var(--darkOrange);
        }
    }
    }
`