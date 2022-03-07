import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content:center;
  padding-bottom:30px;
  padding-top:100px;
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
  @media screen and (min-width: 740px) {
      ul{
        flex-direction: row;
        width: 580px;
        flex-wrap: wrap;
      }
  }
  @media screen and (min-width:1120px){
      ul{
        width: 880px;
      }
  }
  @media screen and (min-width:1500px){
      ul{
        width: 1180px;
      }
  }
  @media screen and (min-width:1900px){
      ul{
        width: 1480px;
      }
  }
`