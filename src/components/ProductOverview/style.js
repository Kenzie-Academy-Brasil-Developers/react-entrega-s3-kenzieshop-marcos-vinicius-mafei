import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:flex-start;
    figure{
        height:127.39px;
        img{
        width: 100px;
        height:127.4px;
        border: 2px solid var(--midBrown);
    }
    }
    .container--infos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        margin-top: 15px;
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
            font-size:10px;
            color: var(--strongYellow);
            font-family: 'Inter', sans-serif;
        }
        .quantity--control{
            display:flex;
            justify-content: space-between;
            align-items: center;
            width: 140px;
            .add--remove{
                display: flex;
                gap:10px;
                align-items: center;
                button{
                    width: 20px;
                    height: 20px;
                    margin: 0;
                    border: 1px solid var(--darkOrange);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
    button{
        margin-top: 18px;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        color: var(--darkOrange);
        &:hover{
            color: var(--strongYellow);
        }
    }

    @media screen and (min-width: 1000px){
        figure{
            height: 154px;
            img{
                width:120px;
                height:153px;
        }
        }
        .container--infos{
            width: 200px;
            gap: 30px;
            h4{
            font-size:20px;
            }
            h5{
                font-size:18px;
            }
            h6{
                font-size:14px;
            }
            .quantity--control{
                width: 200px;
            }
        }
    }
`