import styled from 'styled-components'


export const Container = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-bottom:30px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media screen and (min-width: 900px){
        margin-inline: auto;
        max-width: 1120px;
    }
`