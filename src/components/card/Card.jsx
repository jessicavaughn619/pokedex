import React, { useState } from 'react'
import Description from './Description'
import "./card.css"
import {BsHeart} from "react-icons/bs"

const Card = ({id, name, image, type, height, weight}) => {
        
    const background = `card__container ${type}`
    const [show, setShow] = useState(false)
    const [toggleHeart, setToggleHeart] = useState(false)

  return (
    <div className={background}>
        <div className="pokemon__number">
            <small>{id}</small>
        </div>
        <div className="love__icon">
          <BsHeart className="heart" onClick={() => setToggleHeart(toggleHeart)} />
        </div>
        <img className="pokemon__thumbnail" src={image} alt={name} />
        <div className="detail__wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type: {type.toUpperCase()}</small>
        <button className="pokemon__info" onClick={() => setShow(!show)}>{show===true? "Learn less...": "Learn more..."}</button>
        {show===true?
        <Description
        pokeheight = {height}
        pokeweight = {weight}
        /> : <></>}
        </div>
    </div>
  )
}

export default Card