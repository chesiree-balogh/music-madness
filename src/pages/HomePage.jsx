import React from 'react'
import HelloWorld from '../components/HelloWorld'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
      <h1>Chesireé's study tunes.</h1>
      <h6>Subject to change... daily.</h6>
      <ul>
        <li>
          <Link to="/khruangbin">Khruangbin</Link>
        </li>
        <li>
          <Link to="/the90sFlav">The90sFlav</Link>
        </li>
        <li>
          <Link to="/twoFeet">TwoFeet</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
