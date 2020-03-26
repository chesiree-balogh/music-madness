import React from 'react'

const Band = (props) => {
  return (
    <li>
      <img src={props.image} alt="" />
      <h1>{props.name}</h1>
      <h2>{props.mostRecent}</h2>
      <h3>{props.released}</h3>
      <h4>{props.description}</h4>
    </li>
  )
}

export default Band
