import React from 'react'
import "./../Test.scss"
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
      <div className="nav">
      <ul>
        <li><NavLink to="/">이용정보</NavLink> </li>
        <li><NavLink to="/">요금&amp;프로모션</NavLink> </li>
        <li><NavLink to="/">즐길거리</NavLink> </li>
        <li><NavLink to="/">멤버십</NavLink> </li>
        <li><NavLink to="/">에버랜드 더 알아보기</NavLink> </li>
        
      </ul>
    </div>
    )
}
  
export default Nav


