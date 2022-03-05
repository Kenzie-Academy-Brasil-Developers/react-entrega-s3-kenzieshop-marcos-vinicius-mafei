import styled from 'styled-components'

export const FancyHeader = styled.header`
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
`