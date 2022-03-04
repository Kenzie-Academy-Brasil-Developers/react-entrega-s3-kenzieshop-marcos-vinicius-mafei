import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content:center;
  padding-bottom:30px;
  padding-top:30px;
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    list-style: none;
    li{
      width: 280px;
    }
  }
`