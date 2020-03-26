import React from 'react'
import Band from '../components/Band'

const The90sFlavPage = () => {
  return (
    <Band
      image="./images/img90sFlave.jpg"
      name="90sFlav"
      mostRecent="Most recent album: Collection II."
      released="Released: 2019."
      description="This album is a genre of music that mashes up traditional hip-hop and
    jazz elements to create an atmospheric, instrumental soundscape."
    />
  )
}

export default The90sFlavPage

// <>
// <h1>90sFlav</h1>
// <h2>Most recent album: Collection II.</h2>
// <h3>Released: 2019.</h3>
// <h4>
//   “This album is a genre of music that mashes up traditional hip-hop and
//   jazz elements to create an atmospheric, instrumental soundscape."
// </h4>
// </>
