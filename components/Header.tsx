import React from 'react'

const Header = () => {
  return (
    <header className="header">
     <h1>My Blog</h1>
     <nav>
      <ul>
        <li><a href='/about'>About us</a></li>
        <li><a href='/contact'>Contact us</a></li>
      </ul>
     </nav>
    </header>
  )
}

export default Header
