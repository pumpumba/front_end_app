import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <nav>
        <Link to='/'>Popular</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/search'>Search</Link>
        <Link to='/settings'>Settings</Link>
      </nav>
  )
}

export default Footer