import styled from 'styled-components'

export const Container = styled.div`
    padding: 2px;
    position: relative;
    .cart{
        color: var(--lightOrange);
    }
    .arrow{
        position: absolute;
        top: 10px ;
        left: -12px;
        .icon{
            color: var(--darkOrange);
        }
    }
`