import * as React from 'react';
import * as ICON from '../../assets/icons.json'

const MenuButton = (props) => (
  <svg id="icon" width="30" height="30" onClick={props.toggleMenu} className="menu-button">
    <path
      id="hamburger"
      d={ICON.icon.before}
    />
  </svg>
) 

export default MenuButton;