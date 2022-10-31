import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <h1>
            <Link to="/">토익 영단어 고급</Link>
        </h1>
        <div className="menu">
            <Link to="/CreateWord" className='link'>
                단어 추가
            </Link>
            <a href="#x" className='link'>
                Day 추가
            </a>
        </div>
    </header>
  )
}

export default Header