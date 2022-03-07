import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    img{
        width: 70px;
        height: 80px;
        border: 1px solid var(--brown);
        border-radius:2px;
    }
    .infos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin-top: 2px;
        width: 150px;
        h4{
            font-size:17px;
            font-family: 'Fira Sans Condensed', sans-serif;
            color:var(--darkOrange) ;
        }
        h5{
            font-size:14px;
            color:var(--midBrown) ;
            font-family: 'Inter', sans-serif;
        }
        h6{
            font-size:12px;
            color: var(--strongYellow);
            font-family: 'Inter', sans-serif;
        }
    }
    button{
        margin-top: 5px;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        color: var(--darkOrange);
        &:hover{
            color: var(--strongYellow);
        }
    }
`