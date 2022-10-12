import React from 'react'

function WeatherInf( { inf, infText}) {
  return (
    <>
      {inf}
      <h4>
        {infText}
      </h4>
    </>
  )
}

export default WeatherInf