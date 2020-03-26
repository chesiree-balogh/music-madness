import React from 'react'
import Band from '../components/Band'

const KhruangbinPage = () => {
  return (
    <Band
      image="./images/imgkhru.jpg"
      name="Khruangbin"
      mostRecent="Most recent album: Texas Sun."
      released="Released: 2020."
      description="Texas Sun” is a simmering road-trip number, with Bridges' delivery
      rendering that oppressive sun into something more mellow. Khruangbin
      provides a head-nodding beat, but for all of their synergy, the result
      still resembles boilerplate Bob Seger."
    />
  )
}

export default KhruangbinPage

{
  /* <>
<h1>Khruangbin</h1>
<h2>Most recent album: Texas Sun.</h2>
<h3>Released: 2020.</h3>
<h4>
  “Texas Sun” is a simmering road-trip number, with Bridges' delivery
  rendering that oppressive sun into something more mellow. Khruangbin
  provides a head-nodding beat, but for all of their synergy, the result
  still resembles boilerplate Bob Seger."
</h4>
</> */
}
