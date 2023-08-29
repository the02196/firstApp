import React from 'react'

function Li(props) {
    let Desc = ["이용정보", "요금 & 프로모션", "즐길거리", "멤버십", "에버랜드 더 알아보기"]
    return (
      <li><a href="/">{Desc[props.arrayNum]}</a></li>
    )
  }
  
function Nav() {
    return (
      <div className="nav">
      <ul>
        <Li arrayNum="0" />
        <Li arrayNum="1" />
        <Li arrayNum="2" />
        <Li arrayNum="3" />
        <Li arrayNum="4" />
      </ul>
    </div>
    )
}
  
export default Nav


