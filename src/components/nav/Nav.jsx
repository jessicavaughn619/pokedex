import React, { useState } from 'react'

const Nav = ({key, type}) => {
    const [] = useState();
    function handleClick() {
    }

  return (
    <div className="dropdown">
        <button onClick={handleClick()} class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </div>
  )
}

export default Nav