import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img{
        width: 80px;
        height: 100px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        margin-top: 15px;
        h4{
            font-size:16px;
            color:var(--darkOrange) ;
        }
        h5{
            font-size:13px;
            color:var(--midBrown) ;
        }
    }
    button{
        margin-top: 15px;
    }
`