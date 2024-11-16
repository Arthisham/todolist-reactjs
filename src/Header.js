
import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      <h1>My List </h1>
    </header>
  )
}

Header.defaultProps = {
  title:"to-do list"
}

export default Header