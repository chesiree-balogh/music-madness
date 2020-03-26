import React from 'react'
import Band from '../components/Band'

const TwoFeetPage = () => {
  return (
    <ul>
      <Band
        image="./images/imgtwofeet.jpg"
        name="Two Feet"
        mostRecent="Most recent album: Pink."
        released="Released: 2020."
        description="In Two Feet’s new album Pink, American singer/songwriter Zachary
      William Dess takes his well-known blend of electronica and soul to new
      heights, reaching a sound that comes across almost like a movie score.
      The focus is largely on Dess’ skills as a producer, with the beats
      driving the mood for the most part."
      />
    </ul>
  )
}

export default TwoFeetPage

{
  /* <>
      <h1>Two Feet</h1>
      <h2>Most recent album: Pink.</h2>
      <h3>Released: 2020.</h3>
      <h4>
        "In Two Feet’s new album Pink, American singer/songwriter Zachary
        William Dess takes his well-known blend of electronica and soul to new
        heights, reaching a sound that comes across almost like a movie score.
        The focus is largely on Dess’ skills as a producer, with the beats
        driving the mood for the most part."
      </h4>
    </> */
}
