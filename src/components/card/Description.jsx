import React, { useState } from 'react'
import "./description.css"

const Description = ({pokeheight, pokeweight}) => {
  return (
    <div className="more__info">
        <small>Height: {pokeheight} inches </small>
        <small>Weight: {Math.floor(pokeweight/4.536)} pounds </small>
    </div>
  )
}

export default Description