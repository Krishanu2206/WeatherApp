import React from 'react'
import Searchbox from './Searchbox.jsx'
import Infobox from './Infobox.jsx'

function Weatherapp() {

  return (
    <div>
      <h1 style={{textAlign:"center"}}>WEATHER APP BY ASSAILANT</h1>
      <Searchbox />
      <Infobox />
    </div>
  )
}

export default Weatherapp