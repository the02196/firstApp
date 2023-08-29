import React from 'react'
import { styled } from 'styled-components'


const Style = styled.div`
    background-color: orange;
    font-size: 3rem;
`

const Ul = styled.ul`
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        li{
            background-color: gray;
            a{
                color: lightgray;
            }
        }
`

function Styled() {
  let Menu = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"];
  return (
    <Style>Styled
        <Ul>
            {
                Menu.map((el, i) => {
                    return (
                    <li key={i}>{el}</li>
                    )
                })
            }
        </Ul>
    </Style>
  )
}

export default Styled